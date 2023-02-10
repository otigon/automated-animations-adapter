import { router }           from "../module.js";
import { aaHandler }        from "../module.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("ffgDiceMessage", async (roll) => {

        let compiledData = await getRequiredData({
            item: roll.data,
            workflow: roll,
        })
        if (!compiledData.item) { return; }
        runStarwarsffg(compiledData)
    });
}

async function runStarwarsffg(input) {
    const handler = await aaHandler(input)
    router(handler);
}