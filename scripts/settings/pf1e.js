export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'disableAEAnimations',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.disableAEAnimations',
            hint: 'autoanimationsAdapter.settings.disableAEAnimationsHint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });
}