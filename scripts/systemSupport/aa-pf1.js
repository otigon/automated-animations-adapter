import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };
        const actionId = msg.getFlag("pf1", "metadata")?.action;
        const chatName = $(msg.content).find('.item-name')?.text() ?? '';
        const itemFromChat = msg.itemSource;
        if (!itemFromChat) { return; };
        const item = foundry.utils.deepClone(itemFromChat);
        if (item && actionId) {
            item.actions?.get(actionId)?.name ?? '';
            item.name = `${item.name} ${actionName}`;
        }
        else if (item && chatName && chatName.includes(item.name)) {
            // chat card name should alwyays be either "Item Name" or "Item Name (Action Name)" so this replacement should always be safe
            item.name = chatName;
        }
        const tokenId = msg.speaker?.token;
        const actorId = msg.speaker?.actor;
        runPF1({ item, tokenId, actorId, workflow: msg });
    });
}

async function runPF1(input) {
    const requiredData = await getRequiredData(input)
    if (!requiredData.item) { return; }
    const handler = await aaHandler(requiredData)
    router(handler);
}