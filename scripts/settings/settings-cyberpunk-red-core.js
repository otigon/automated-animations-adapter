export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'autofire',
        folder: game.system.title || game.system.name,
        options: {
           name: 'autoanimations.settings.cyberPunkAutoFire',
           hint: 'autoanimations.settings.cyberPunkAutoFire_hint',
           scope: scope.world,
           type: Boolean,
           default: true,
           config: true,
        }
     }, {
        namespace,
        key: 'canMissTarget',
        folder: game.system.title || game.system.name,
        options: {
           name: 'autoanimations.settings.cyberPunkCanMiss',
           hint: 'autoanimations.settings.cyberPunkCanMiss_hint',
           scope: scope.world,
           type: Boolean,
           default: true,
           config: true,
        }
     },{
         namespace,
         key: 'useElevation',
         folder: game.system.title || game.system.name,
         options: {
            name: 'autoanimations.settings.cyberPunkElevation',
            hint: 'autoanimations.settings.cyberPunkElevation_hint',
            scope: scope.world,
            type: Boolean,
            default: true,
            config: true,
         }
      });
}