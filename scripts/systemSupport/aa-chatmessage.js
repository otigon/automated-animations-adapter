import { aaHandler, router, debug } from "../module.js";
import { getRequiredData }          from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {checkChatMessage(msg) });
}

async function checkChatMessage(msg) {
    if (msg.user.id !== game.user.id) { return };

    let findData = searchHTML(msg);
    if (!findData.itemId) { 
        debug("Unable to locate Item ID from Chat Message HTML")
        return;
    }
    let item = msg.item ?? msg.itemSource;
    let compiledData = await getRequiredData({
        itemId: findData.itemId,
        item: item,
        actorId: msg.speaker?.actor || findData.actorId,
        tokenId: msg.speaker?.token || findData.tokenId,
        workflow: msg,
    })
    const handler = await aaHandler(compiledData)
    if (!handler) { return; }
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    router(handler);
}

function searchHTML(msg) {
    //let findItemId = $(msg.content).find(`[data-item-id]`);
    let filterItemId = $(msg.content).filter(`[data-item-id]`);
    let itemId = filterItemId?.[0]?.attributes?.['data-item-id']?.value || filterItemId?.prevObject?.[0]?.attributes?.['data-item-id']?.value;
    if (!itemId) {
        const systemId = game.system.id;
        let flags = msg.flags;
        itemId = flags.itemId ??
                flags.ItemId ??
                flags[systemId]?.itemId ??
                flags[systemId]?.ItemId ??
                msg.rolls?.[0]?.options?.itemId
    }

    let filterTokenId = $(msg.content).filter(`[data-token-id]`);
    let tokenId = filterTokenId?.[0]?.attributes?.['data-token-id']?.value || filterTokenId?.prevObject?.[0]?.attributes?.['data-token-id']?.value;

    let filterActorId = $(msg.content).filter(`[data-actor-id]`);
    let actorId = filterActorId?.[0]?.attributes?.['data-actor-id']?.value || filterActorId?.prevObject?.[0]?.attributes?.['data-actor-id']?.value;

    return {itemId, tokenId, actorId}
}
