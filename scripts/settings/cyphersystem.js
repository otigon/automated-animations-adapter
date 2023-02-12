export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'EnableCritical',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.cypherCrit_name',
            hint: 'autoanimationsAdapter.settings.cypherCrit_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'CriticalAnimation',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.CriticalAnimation',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });

    settings.push({
        namespace,
        key: 'EnableFumble',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.cypherFumble_name',
            hint: 'autoanimationsAdapter.settings.cypherFumble_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'FumbleAnimation',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.cypherFumbleAnim_name',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });

    settings.push({
        namespace,
        key: 'EnableOnRecoveryRoll',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.recovery_name',
            hint: 'autoanimationsAdapter.settings.recovery_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'RecoveryRollAnimation',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.recoveryAnim_name',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });

    settings.push({
        namespace,
        key: 'EnableOnMightRoll',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.mightroll_name',
            hint: 'autoanimationsAdapter.settings.mightroll_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'MightRollAnimation',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.mightRollAnim_name',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });

    settings.push({
        namespace,
        key: 'EnableOnSpeedRoll',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.speedroll_name',
            hint: 'autoanimationsAdapter.settings.speedroll_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'SpeedRollAnimation',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.speedRollAnim_name',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });

    settings.push({
        namespace,
        key: 'EnableOnIntellecRoll',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.intellectroll_name',
            hint: 'autoanimationsAdapter.settings.intellectroll_hint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
        }
    });

    settings.push({
        namespace,
        key: 'IntellectRollAnimation',
        folder: game.system.title || game.system.name,
        options: {
            name: 'autoanimationsAdapter.settings.intellectRollAnim_name',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });
}