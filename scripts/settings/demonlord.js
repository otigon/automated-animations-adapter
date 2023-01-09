export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'playtrigger',
        folder: game.system.title || game.system.name,
        options: {
            name: 'automatedAnimationsAdapter.settings.demonlordtrigger_name',
            hint: 'automatedAnimationsAdapter.settings.demonlordtrigger_hint',
            scope: scope.world,
            type: String,
            choices: {
                rollattack: 'automatedAnimationsAdapter.settings.demonlordtrigger_rollattack',
                hits: 'automatedAnimationsAdapter.settings.demonlordtrigger_hits',
                misses: 'automatedAnimationsAdapter.settings.demonlordtrigger_misses',
                rolldamage: 'automatedAnimationsAdapter.settings.demonlordtrigger_rolldamage',
                applydamage: 'automatedAnimationsAdapter.settings.demonlordtrigger_applydamage',
            },
            default: 'rollattack',
            config: true
        }
    });
}