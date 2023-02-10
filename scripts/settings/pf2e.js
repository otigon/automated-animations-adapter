export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'playonDamageCore',
        folder: game.system.title || game.system.name,
        options: {
            name: 'automatedAnimationsAdapter.settings.coreondmg_name',
            hint: 'automatedAnimationsAdapter.settings.coreondmg_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'playonmiss',
        folder: game.system.title || game.system.name,
        options: {
            name: 'automatedAnimationsAdapter.settings.midionmiss_name',
            hint: 'Requires Animations to be played on Attack rolls',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'disableNestedEffects',
        folder: game.system.title || game.system.name,
        options: {
            name: 'automatedAnimationsAdapter.settings.disableNested',
            hint: 'automatedAnimationsAdapter.settings.disableNestedHint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'disableGrantedAuraEffects',
        folder: game.system.title || game.system.name,
        options: {
           name: 'autoanimations.settings.disableGrantedAura',
           hint: 'autoanimations.settings.disableGrantedAuraHint',
           scope: scope.world,
           type: Boolean,
           default: false,
           config: true,
        }
     });
}