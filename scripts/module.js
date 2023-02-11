import * as systemSettings              from "./settings/index.js";
import * as systemSupport               from "./systemSupport/index.js";
import { registerActiveEffectHooks }    from "./active-effects/handleActiveEffectHooks.js";

export const aaDeletedItems = new Map();

// Initializes the Automated Animations handler. False is returned if no Animation is matched
export async function aaHandler(data) {
    return await AutomatedAnimations.WorkflowHandler.make(data);
}

// Sends the handler to the Automated Animations router function to start the animation process
export function router(handler) {
    AutomatedAnimations.Router(handler);
}

// Compiles macro data
export async function compileMacro(handler, flagData) {
    return AutomatedAnimations.DataSanitizer.compileMacro(handler, flagData)
}

// Uses Automated Animations to remove tiles via Socketlib
export function removeTile(tileIdArray) {
    AutomatedAnimations.removeTile.executeAsGM("removeTile", tileIdArray)
}

function cleanSystemID() {
    return game.system.id.replace(/\-/g, '');
}

// Registers System Settings to the Automated Animations menu
Hooks.once('aa.registerSettings', async function(settings, namespace, scope, options) {
    await systemSettings[cleanSystemID()].systemSettings(settings, namespace, scope, options)
    options.registerAll(settings, !game.user.isGM);
});

// Stores deleted items to check when searching for an Item. Primary use is for expendable items to get the last one used.
Hooks.on("deleteItem", async (item) => {
    aaDeletedItems.set(item.id, item)
});

Hooks.once('ready', async function() {
    /**
     * Officially Supported Systems:
     * DnD 5e
     * Pathfinder 2e
     * Pathfinder 1
     * Advanced 5e
     * Alien RPG
     * CypherSystem
     * DnD 3.5
     * Dungeon Crawl Clasics
     * Shadow of the Demonlord
     * Forbidden Lands
     * Starfinder RPG
     * Star Wars FFG
     * Star Wars 5e
     * SWADE
     * Warhammer Fantasy RPG
     * Old School Essentials
     * Cyberpunk Red (Only for Attacks)
     * The Witcher RPG
     * TwoDSix
    */

    // Sets the System Hooks to monitor for chat messages or other hooks depending on the system.
    // Falls back to a generic "standard" chat message monitoring that may or may not work
    systemSupport[cleanSystemID()] ? systemSupport[cleanSystemID()].systemHooks() : systemSupport.chatmessage.systemHooks();

    // Registers all hooks for handling Active Effect animations
    registerActiveEffectHooks();
});