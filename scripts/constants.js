export function debug(...args) {
    if (game.settings.get("autoanimations", "debug")) {
        console.log(`DEBUG | Automated Animations |`, ...args);
    }
}