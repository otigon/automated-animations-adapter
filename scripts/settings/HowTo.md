# How to add system settings  
  
Add a new file here to add System Specific settings. Naming comvention should be ``yoursystemname.js``, all lower case and remove any special characters such as ``-`` or ``$!@`` if present.  
  
Some game systems do not need any system specific settings, such as those that perform all rolls from a single item use (See DnD 3.5).  
  
All settings will be populated inside the Automated Animations Global menu in a folder defined by the setting. This should typically be the ``game.system.title`` or ``game.system.name``.
  
Settings are stored as an array for use with TRL GameSettings. Typical structure includes:  
  
```js
/**
 * @param {String} namespace // Leave as-is. Stores the settings under Automated Animations
 * @param {String} key // Setting Key
 * @param {String} folder //  The folder this setting will be stored under.
 * Typically game.system.title || game.system.name
 * @param {Object} options // Contains all the relevant information for the setting
 * Option Properties
 * @param {String} name // the Localized path for the Setting Name
 * @param {String} hint // The Localized path for the Setting Hint
 * @param {String} scope // Either scope.world || scope.client
 * @param {Boolean || String || Number} type // The Type of setting
 * @param {Boolean || String || Number} default // The Default for this setting. Matches the TYPE
 * @param {Boolean} config // FALSE if you don't want it to be configurable
 * 
*/
settings.push({
    namespace,
    key: 'playOnDamage',
    folder: game.system.title || game.system.name,
    options: { // Options for the setting
        name: 'autoanimationsAdapter.settings.crithit_name', // Setting Name
        hint: 'autoanimationsAdapter.settings.crithit_hint', // Setting Hint
        scope: scope.world,   // SCOPE: scope.world or scope.client
        type: Boolean,  // Type: Boolean, String 
        default: false,
        config: true
    }
});
```