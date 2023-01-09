import { debug }                                            from "../constants.js";
import { router, aaHandler, AnimationState, compileMacro }  from "../module.js";

export async function createRuleElementPF2e(item) {
    const aePF2eTypes = ['condition', 'effect']
    if (!aePF2eTypes.includes(item.type)) { return; }
    
    if (!AnimationState) { return; }

    // Get the Item ID and Token it is on
    const itemId = item.id;
    const aeToken = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null)
    if (!aeToken) {
        debug("Failed to find the Token for the Active Effect")
        return;
    }

    const aeNameField = item.name.replace(/[^A-Za-z0-9 .*_-]/g, "") + `${aeToken.id}`
    const checkAnim = await Sequencer.EffectManager.getEffects({ object: aeToken, name: aeNameField }).length > 0
    if (checkAnim) {
        debug("Animation is already present on the Token, returning.")
        return;
    }

    const data = {
        token: aeToken,
        targets: [],
        item: item,
        activeEffect: true,
        tieToDocuments: true,
    }
    let handler = await aaHandler(data);
    if (!handler) { return; }

    // Exits early if Item or Source Token returns null. Total Failure
    if (!handler.item || !handler.sourceToken) {
        debug("Failed to find the Item or Source Token", handler)
        return;
    }

    // Sends the data to begin the animation Sequence
    router(handler);

}

export async function deleteRuleElementPF2e(item) {
    const aePF2eTypes = ['condition', 'effect']
    if (!aePF2eTypes.includes(item.type)) { return; }

    const token = item.parent?.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item.id) != null)
    
    const data = {
        token: token,
        targets: [],
        item: item,
        activeEffect: true,
    };

    const handler = await aaHandler(data);
    if (!handler) { return; }

    const flagData = handler.animationData

    const macro = await compileMacro(handler, flagData);
    if (macro) {
        new Sequence()
            .macro(macro.name, "off", handler, macro.args)
            .play()
    }
}