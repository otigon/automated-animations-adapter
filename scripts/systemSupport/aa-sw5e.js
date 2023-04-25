import { aaHandler, router, debug } from "../module.js";
import { getRequiredData }          from "./getRequiredData.js";

// SW5e System hooks provided to run animations
export function systemHooks() {
    if (game.modules.get("midi-qol")?.active) {
        Hooks.on("midi-qol.AttackRollComplete", (workflow) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
            if (workflow.item?.hasAreaTarget || (workflow.item?.hasDamage && playOnDamage)) { return };
            attack(getWorkflowData(workflow)); criticalCheck(workflow)
        });
        Hooks.on("midi-qol.DamageRollComplete", (workflow) => { 
            let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
            if (workflow.item?.hasAreaTarget || (!playOnDamage && workflow.item?.hasAttack)) { return };
            damage(getWorkflowData(workflow)) 
        });
        // Items with no Attack/Damage
        Hooks.on("midi-qol.RollComplete", (workflow) => {
            if (workflow.item?.hasAreaTarget || workflow.item?.hasAttack || workflow.item?.hasDamage) { return };
            useItem(getWorkflowData(workflow))
        });
    
    } else {
        Hooks.on("sw5e.rollAttack", async (item, roll) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
            if (item.hasAreaTarget || (item.hasDamage && playOnDamage)) { return; }   
            attack(await getRequiredData({item, actor: item.actor, workflow: item}))
        })
        Hooks.on("sw5e.rollDamage", async (item, roll) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
            if (item.hasAreaTarget || (item.hasAttack && !playOnDamage)) { return; }
            damage(await getRequiredData({item, actor: item.actor, workflow: item}))
        })
        Hooks.on('sw5e.useItem', async (item, config, options) => {
            if (item?.hasAreaTarget || item.hasAttack || item.hasDamage) { return; }
            useItem(await getRequiredData({item, actor: item.actor, workflow: item}))
        })
    }
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        templateAnimation(await getRequiredData({itemUuid: template.flags?.sw5e?.origin, templateData: template, workflow: template, isTemplate: true}))
    })
}

/**
 * 
 * @param {Boolean} hasAreaTarget // Checks to see if the item has an AOE template
 * @param {Boolean} hasAttack // Checks if the item has Attack
 * @param {Boolean} hasDamage // Checks if the item has Damage
 *  
 */

async function useItem(input) {
    debug("Item used, checking for animations")
    const handler = await aaHandler(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    router(handler)
}

async function attack(input) {
    checkAmmo(input)
    checkReach(input)
    debug("Attack rolled, checking for animations");
    const handler = await aaHandler(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    router(handler)
}

async function damage(input) {
    checkAmmo(input)
    checkReach(input)
    debug("Damage rolled, checking for animations")
    const handler = await aaHandler(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    router(handler)
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    if (!input.item) { 
        debug("No Item could be found")
        return;
    }
    const handler = await aaHandler(input)
    router(handler)
}

function checkAmmo(data) {
    //const ammo = data.item?.flags?.autoanimations?.fromAmmo;
    const ammoType = data.item?.system?.consume?.type;
    data.ammoItem = ammoType === "ammo" ? data.token?.actor?.items?.get(data.item?.system?.consume?.target) : null;
}

function checkReach(data) {
    let reach = 0;
    if (data.item.system?.properties?.rch) {
        reach += 1;
    }
    data.reach = reach;
}

function getWorkflowData(data) {
    return {
        item: data.item,
        token: data.token,
        targets: Array.from(data.targets),
        hitTargets: Array.from(data.hitTargets),
        workflow: data,
    }
}

function criticalCheck(workflow) {
    if (!workflow.isCritical && !workflow.isFumble) { return; }
    debug("Checking for Crit or Fumble")
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;
    let token;

    let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
    let critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");

    switch (true) {
        case (game.settings.get("autoanimations", "EnableCritical") && critical):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critAnim)
                .atLocation(token)
                .play()
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critMissAnim)
                .atLocation(token)
                .play()
            break;
    }
}