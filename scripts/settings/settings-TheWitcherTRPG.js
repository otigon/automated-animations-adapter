export function systemSettings(settings, namespace, scope) {
   settings.push({
      namespace,
      key: "attackSkill",
      folder: game.system.title || game.system.name,
      options: {
         name: 'autoanimations.settings.coreonatk_name',
         hint: 'autoanimations.settings.coreonatk_hint',
         scope: scope.world,
         type: Boolean,
         default: true,
         config: true,
      }
   });
   settings.push({
      namespace,
      key: "damage",
      folder: game.system.title || game.system.name,
      options: {
         name: 'autoanimations.settings.coreondmg_name',
         hint: 'autoanimations.settings.coreondmg_hint',
         scope: scope.world,
         type: Boolean,
         default: true,
         config: true,
      }
   });
   settings.push({
      namespace,
      key: "spell",
      folder: game.system.title || game.system.name,
      options: {
         name: 'autoanimations.settings.coreonatk_name',
         hint: 'autoanimations.settings.coreonatk_hint',
         scope: scope.world,
         type: Boolean,
         default: true,
         config: true,
      }
   });
}