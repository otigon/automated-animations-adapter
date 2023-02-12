export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'castOnlyOnSuccess',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.wfrp4eCastOnlyOnSuccess',
            hint: 'autoanimationsAdapter.settings.wfrp4eCastOnlyOnSuccessHint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });
}