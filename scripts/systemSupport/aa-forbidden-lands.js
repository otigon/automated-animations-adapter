import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        let compiledData = await getRequiredData({
            itemId: msg.rolls[0].options?.itemId,
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        if (!compiledData.item) { return; }
        runA5e(compiledData)
    });
}

async function runA5e(input) {
    const handler = await aaHandler(input)
    router(handler);
}