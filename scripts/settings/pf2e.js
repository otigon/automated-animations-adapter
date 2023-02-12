export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'playonDamageCore',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.coreondmg_name',
            hint: 'autoanimationsAdapter.settings.coreondmg_hint',
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
            name: 'autoanimationsAdapter.settings.midionmiss_name',
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
            name: 'autoanimationsAdapter.settings.disableNested',
            hint: 'autoanimationsAdapter.settings.disableNestedHint',
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
           name: 'autoanimationsAdapter.settings.disableGrantedAura',
           hint: 'autoanimationsAdapter.settings.disableGrantedAuraHint',
           scope: scope.world,
           type: Boolean,
           default: false,
           config: true,
        }
     });
}