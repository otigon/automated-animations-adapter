// Support submitted by FilippoPolo on GitHub

import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };
        const flags = msg.flags?.["dark-heresy"] ?? {};
        const itemId = flags.rollData.itemId;
        const tokenId = flags.rollData.tokenId;
        const actorId = flags.rollData.ownerId;
        const rollClass = flags.rollData.rollObject.class;
        routeMessage({itemId, tokenId, actorId, workflow: msg, rollClass})
    });
    Hooks.on("AutomatedAnimations-WorkflowStart", onWorkflowStart);
}

async function routeMessage(input) {
    const requiredData = await getRequiredData(input);
    if (!requiredData.item) { return; }
    runDarkHeresy(requiredData);
}

async function runDarkHeresy(data) {
    const handler = await aaHandler(data)
    router(handler);
}

function onWorkflowStart(clonedData, animationData) {
    // Repeat the animation in case of burst attacks.
    if (animationData.primary != null && clonedData.workflow.flags["dark-heresy"].rollData.maxAdditionalHit != null) {
        animationData.primary.options.repeat = (1 + clonedData.workflow.flags["dark-heresy"].rollData.maxAdditionalHit);
    }
}