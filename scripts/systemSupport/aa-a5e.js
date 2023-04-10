import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        const item = await fromUuid(msg.flags?.a5e?.itemId);

        const compiledData = await getRequiredData({
            item: item,  
            itemUuid: msg.flags?.a5e?.itemId,
            actorId: msg.speaker?.actorId,
            tokenId: msg.speaker?.token,
            workflow: msg,
        });

        runA5e(compiledData);
    });

    Hooks.on('a5e.templateCreated', async (item, templateData, userId) => {
        if (userId !== game.user.id) return;

        const compiledData = await getRequiredData({
            item,
            templateData: templateData?.[0],
            workflow: templateData?.[0],
            isTemplate: true,
        })

        runA5e(compiledData);
    });
}

async function runA5e(input) {
    const handler = await aaHandler(input)
    router(handler);
}