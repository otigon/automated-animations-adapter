import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("ds4.rollItem", async (data) => {
        let compiledData = await getRequiredData({
           itemId: data.id,
           actorId: data.actor,
           workflow: data,
       })
       runDs4(compiledData)
    });
}

async function runDs4(input) {
    const handler = await aaHandler(input);
    if (!handler) { return; }
    router(handler);
}