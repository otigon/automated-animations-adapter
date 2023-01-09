import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { AnimationState }   from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

        let compiledData = await getRequiredData({
            itemId: msg.flags?.itemId,
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        runA5e(compiledData)
    });
}

async function runA5e(input) {
    const handler = await aaHandler(input)
    if (!handler) { return; }
    router(handler);
}