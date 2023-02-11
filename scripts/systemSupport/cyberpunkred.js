import { debug }            from "../constants.js";
import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {checkChatMessage(msg) });
}

async function checkChatMessage(msg) {
    if (msg.user.id !== game.user.id) { return };

    let findData = searchHTML(msg)

    if (!findData.itemId) { 
        debug("Could not extract Item ID from Chat Message HTML")
        return; 
    }

    let compiledData = await getRequiredData({
        itemId: findData.itemId,
        actorId: msg.speaker?.actor || findData.actorId,
        tokenId:  msg.speaker?.token || findData.tokenId,
        workflow: msg,
    })

    compiledData.fireMode = getFireModeOptions(compiledData);

    let isAmmo = checkAmmo(compiledData);
    if (isAmmo) { compiledData.ammoItem = isAmmo }
    const handler = await aaHandler(compiledData)
    if (!handler?.item || !handler?.sourceToken) { debug("No Item or Source Token", handler); return;}
    router(handler);
}

function getFireModeOptions(data) {
    let item = data.item || {};
    let id = item.id;
    let parent = item.parent;
    const fireMode = parent?.flags?.["cyberpunk-red-core"]?.[`firetype-${id}`]
    /**
     * Fire Mode types
     * aimed
     * autofire
     * suppressive
     */
    let autofireEnabled = game.settings.get('autoanimations', 'autofire');
    if (!fireMode || !autofireEnabled) { return null; } else {
        data.miss = fireMode === "suppressive" ? true : void 0;
        data.repeat = fireMode === "suppressive" || fireMode === "autofire" ? 10 : void 0;
    }
}

function checkAmmo(data) {
    let item = data.item || {};
    let token = data.token;
    let ammoId = item.system?.magazine?.ammoId;

    let ammoItem;
    if (ammoId) {
        ammoItem = token.actor?.items?.get(ammoId);
    }
    return ammoItem;
}

function searchHTML(msg) {
    let findItemId = $(msg.content).find(`[data-item-id]`);
    let itemId = findItemId?.[0]?.attributes?.['data-item-id']?.value;

    let findTokenId = $(msg.content).find(`[data-token-id]`);
    let tokenId = findTokenId?.[0]?.attributes?.['data-token-id']?.value;

    let findActorId = $(msg.content).find(`[data-actor-id]`);
    let actorId = findActorId?.[0]?.attributes?.['data-actor-id']?.value;

    return {itemId, tokenId, actorId}
}