export async function systemSettings(settings, namespace, scope) {
    if (game.modules.get('midi-qol')?.active) {
        settings.push({
            namespace,
            key: 'playonhit',
            folder: 'Midi-QOL',
            options: {
                name: 'autoanimationsAdapter.settings.midionhit_name',
                hint: 'autoanimationsAdapter.settings.midionhit_hint',
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
                name: 'autoanimationsAdapter.settings.midionmiss_name',
                hint: 'autoanimationsAdapter.settings.midionmiss_hint',
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
                name: 'autoanimationsAdapter.settings.midiondmg_name',
                hint: 'autoanimationsAdapter.settings.midiondmg_hint',
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
                name: 'autoanimationsAdapter.settings.crithit_name',
                hint: 'autoanimationsAdapter.settings.crithit_hint',
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
                name: 'autoanimationsAdapter.settings.crithitAnim_name',
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
                name: 'autoanimationsAdapter.settings.critmiss_name',
                hint: 'autoanimationsAdapter.settings.critmiss_hint',
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
                name: 'autoanimationsAdapter.settings.critmissAnim_name',
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
            key: 'playAnimationOn',
            folder: game.system.title || game.system.name,
            options: {
                name: 'When to play Animations',
                hint: 'For Items with Attack and/or Damage, choose when to play the Animation',
                scope: scope.world,
                type: String,
                choices: {
                    attack: 'Attack Rolls',
                    damage: 'Damage Use',
                    onUse: 'Item Use',
                },
                default: 'attack',
                config: true,
            }
        })
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
            key: 'EnableCritical',
            folder: game.system.title || game.system.name,
            options: {
               name: 'autoanimationsAdapter.settings.crithit_name',
               hint: 'autoanimationsAdapter.settings.crithit_hint',
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
               name: 'autoanimationsAdapter.settings.crithitAnim_name',
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
               name: 'autoanimationsAdapter.settings.critmiss_name',
               hint: 'autoanimationsAdapter.settings.critmiss_hint',
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
               name: 'autoanimationsAdapter.settings.critmissAnim_name',
               scope: scope.world,
               config: true,
               type: String,
               default: "",
               filePicker: 'imagevideo'
            }
         });
    }
}