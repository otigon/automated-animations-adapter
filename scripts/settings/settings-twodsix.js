export function systemSettings(settings, namespace, scope) {
   settings.push({
      namespace,
      key: 'playtrigger',
      folder: game.system.title || game.system.name,
      options: {
         name: 'autoanimations.settings.playAnimations',
         scope: scope.world,
         type: String,
         choices: {
            onAttack: 'autoanimations.settings.attack',
            onDamage: 'autoanimations.settings.damage',
         },
         default: 'onAttack',
         config: true
      }
   });
}