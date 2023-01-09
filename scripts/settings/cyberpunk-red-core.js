export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'autofire',
        folder: game.system.title || game.system.name,
        options: {
            name: 'Enable Automatic Repeats',
            hint: 'Override repeats for the Primary animation when Automatic or Suppressive fire is enabled for weapon',
            scope: scope.world,
            type: Boolean,
            default: true,
            config: true,
        }
    });
}