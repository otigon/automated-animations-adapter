import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { AnimationState }   from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

        let compiledData = await getRequiredData({
            itemId: msg.flags?.dcc?.ItemId,
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        runDcc(compiledData)
    });
}

async function runDcc(input) {

    if (!game.settings.get('dcc', 'useStandardDiceRoller')) {
        const handler = await aaHandler(input)
        if (!handler) { return; }
        router(handler);
    } else if (input.flags?.dcc?.RollType === "Damage" || input.flags?.dcc?.RollType === "SpellCheck") {
        const handler = await aaHandler(input)
        if (!handler) { return; }
        router(handler);
    }
}