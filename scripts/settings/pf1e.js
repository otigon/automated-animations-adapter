export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'disableAEAnimations',
        folder: game.system.title || game.system.name,
        options: {
            name: 'automatedAnimationsAdapter.settings.disableAEAnimations',
            hint: 'automatedAnimationsAdapter.settings.disableAEAnimationsHint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });
}