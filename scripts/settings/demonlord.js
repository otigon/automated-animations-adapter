export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'playtrigger',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.demonlordtrigger_name',
            hint: 'autoanimationsAdapter.settings.demonlordtrigger_hint',
            scope: scope.world,
            type: String,
            choices: {
                rollattack: 'autoanimationsAdapter.settings.demonlordtrigger_rollattack',
                hits: 'autoanimationsAdapter.settings.demonlordtrigger_hits',
                misses: 'autoanimationsAdapter.settings.demonlordtrigger_misses',
                rolldamage: 'autoanimationsAdapter.settings.demonlordtrigger_rolldamage',
                applydamage: 'autoanimationsAdapter.settings.demonlordtrigger_applydamage',
            },
            default: 'rollattack',
            config: true
        }
    });
}