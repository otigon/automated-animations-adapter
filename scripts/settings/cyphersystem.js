export function systemSettings(settings, namespace, scope) {
    settings.push({
        namespace,
        key: 'EnableCritical',
        folder: game.system.title || game.system.name,
        options: {
            name: 'automatedAnimationsAdapter.settings.cypherCrit_name',
            hint: 'automatedAnimationsAdapter.settings.cypherCrit_hint',
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
            name: 'automatedAnimationsAdapter.settings.CriticalAnimation',
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
            name: 'automatedAnimationsAdapter.settings.cypherFumble_name',
            hint: 'automatedAnimationsAdapter.settings.cypherFumble_hint',
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
            name: 'automatedAnimationsAdapter.settings.cypherFumbleAnim_name',
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
            name: 'automatedAnimationsAdapter.settings.recovery_name',
            hint: 'automatedAnimationsAdapter.settings.recovery_hint',
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
            name: 'automatedAnimationsAdapter.settings.recoveryAnim_name',
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
            name: 'automatedAnimationsAdapter.settings.mightroll_name',
            hint: 'automatedAnimationsAdapter.settings.mightroll_hint',
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
            name: 'automatedAnimationsAdapter.settings.mightRollAnim_name',
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
            name: 'automatedAnimationsAdapter.settings.speedroll_name',
            hint: 'automatedAnimationsAdapter.settings.speedroll_hint',
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
            name: 'automatedAnimationsAdapter.settings.speedRollAnim_name',
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
            name: 'automatedAnimationsAdapter.settings.intellectroll_name',
            hint: 'automatedAnimationsAdapter.settings.intellectroll_hint',
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
            name: 'automatedAnimationsAdapter.settings.intellectRollAnim_name',
            scope: scope.world,
            type: String,
            config: true,
            default: "",
            filePicker: "imagevideo"
        }
    });
}