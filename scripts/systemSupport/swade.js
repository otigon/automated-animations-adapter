import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("swadeAction", async (SwadeTokenOrActor, SwadeItem, SwadeAction) => {
        if (SwadeAction === "damage" || (SwadeAction === "formula" && !SwadeItem.system.damage)) {
            const controlledTokens = canvas.tokens.controlled;
            let token;
            if (controlledTokens.length > 0) {
                token = controlledTokens.find(token => token.document.actorId === SwadeTokenOrActor.id);
            }
            if (token) { SwadeTokenOrActor = token; }
            runSwade(SwadeTokenOrActor, SwadeItem)
        }
    });
    async function get_brsw_data (data) {
        return {token: data.token, actor: data.actor, item: data.item}
    }
    Hooks.on("BRSW-RollItem", async (data, html) => {
        const {token, actor, item} = await get_brsw_data (data)
        if (item.flags?.autoanimations?.menu === "templatefx" || (item.flags?.autoanimations?.menu === "preset" && item.flags?.autoanimations?.presetType === "proToTemp")) {
            return //Return to prevent duplicate effects on placing a template.
        } else { runSwade(token, actor, item) }
    });
    Hooks.on("BRSW-BeforePreviewingTemplate", async (template, data, ev) => {
        const {token, actor, item} = await get_brsw_data (data)
        runSwade(token, actor, item)
    })
    Hooks.on("BRSW-CreateItemCardNoRoll", async (data) => {
        const {token, actor, item} = await get_brsw_data (data)
        if (item.flags?.autoanimations?.menu === "templatefx" || (item.flags?.autoanimations?.menu === "preset" && item.flags?.autoanimations?.presetType === "proToTemp")) {
            return //Return to prevent duplicate effects on placing a template.
        } else { runSwade(token, actor, item) }
    })
}

// TO-DO, CHECK SWADE
async function runSwade(token, actor, item) {
    let data = await getRequiredData({token, actor, item })
    if (!data.item) { return; }
    const handler = await aaHandler(data)
    router(handler);
}