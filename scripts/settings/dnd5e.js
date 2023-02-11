export async function systemSettings(settings, namespace, scope) {
    if (game.modules.get('midi-qol')?.active) {
        settings.push({
            namespace,
            key: 'playonhit',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.midionhit_name',
                hint: 'automatedAnimationsAdapter.settings.midionhit_hint',
                scope: scope.world,
                type: Boolean,
                default: false,
                config: true,
            }
        });

        settings.push({
            namespace,
            key: 'playonmiss',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.midionmiss_name',
                hint: 'automatedAnimationsAdapter.settings.midionmiss_hint',
                scope: scope.world,
                type: Boolean,
                default: false,
                config: true,
            }
        });

        settings.push({
            namespace,
            key: 'playonDamage',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.midiondmg_name',
                hint: 'automatedAnimationsAdapter.settings.midiondmg_hint',
                scope: scope.world,
                type: Boolean,
                default: false,
                config: true
            }
        });

        settings.push({
            namespace,
            key: 'EnableCritical',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.crithit_name',
                hint: 'automatedAnimationsAdapter.settings.crithit_hint',
                scope: scope.world,
                type: Boolean,
                default: false,
                config: true
            }
        });

        settings.push({
            namespace,
            key: 'CriticalAnimation',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.crithitAnim_name',
                //name: 'Choose A File',
                scope: scope.world,
                config: true,
                type: String,
                default: "",
                filePicker: 'imagevideo'
            }
        });

        settings.push({
            namespace,
            key: 'EnableCriticalMiss',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.critmiss_name',
                hint: 'automatedAnimationsAdapter.settings.critmiss_hint',
                scope: scope.world,
                type: Boolean,
                default: false,
                config: true
            }
        });

        settings.push({
            namespace,
            key: 'CriticalMissAnimation',
            folder: 'Midi-QOL',
            options: {
                name: 'automatedAnimationsAdapter.settings.critmissAnim_name',
                scope: scope.world,
                config: true,
                type: String,
                default: "",
                filePicker: 'imagevideo'
            }
        });
    } else {
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
            key: 'EnableCritical',
            folder: game.system.title || game.system.name,
            options: {
               name: 'autoanimations.settings.crithit_name',
               hint: 'autoanimations.settings.crithit_hint',
               scope: scope.world,
               type: Boolean,
               default: false,
               config: true
            }
         });

         settings.push({
            namespace,
            key: 'CriticalAnimation',
            folder: game.system.title || game.system.name,
            options: {
               name: 'autoanimations.settings.crithitAnim_name',
               //name: 'Choose A File',
               scope: scope.world,
               config: true,
               type: String,
               default: "",
               filePicker: 'imagevideo'
            }
         });

         settings.push({
            namespace,
            key: 'EnableCriticalMiss',
            folder: game.system.title || game.system.name,
            options: {
               name: 'autoanimations.settings.critmiss_name',
               hint: 'autoanimations.settings.critmiss_hint',
               scope: scope.world,
               type: Boolean,
               default: false,
               config: true
            }
         });

         settings.push({
            namespace,
            key: 'CriticalMissAnimation',
            folder: game.system.title || game.system.name,
            options: {
               name: 'autoanimations.settings.critmissAnim_name',
               scope: scope.world,
               config: true,
               type: String,
               default: "",
               filePicker: 'imagevideo'
            }
         });
    }
}