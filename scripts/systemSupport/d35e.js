import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { AnimationState }   from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";
// WILL NEED REWORK AFTER THE V10 VERSION IS RELEASED
export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

        function extractItemId(content) {
            try {
                return $(content).attr("data-item-id");
            } catch (exception) {
                console.log("COULD NOT GET ITEM ID")
                return null;
            }
        }

        let compiledData = await getRequiredData({
            itemId: extractItemId(msg.content),
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        if (!compiledData.item) { return; }
        runD35E(compiledData)
    });
}

async function runD35E(input) {
    const handler = await aaHandler(input)
    if (!handler) { return; }
    router(handler);
}