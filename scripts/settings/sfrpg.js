export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'playonDamage',
        folder: game.system.title || game.system.name,
        options: {
           name: 'automatedAnimationsAdapter.settings.midiondmg_name',
           hint: 'automatedAnimationsAdapter.settings.midiondmg_hint',
           scope: scope.world,
           type: Boolean,
           default: false,
           config: true
        }
     });
}