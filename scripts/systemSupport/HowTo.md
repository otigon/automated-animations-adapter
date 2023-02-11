# How to add support for a new System  
  
## NOTE: Some systems simply do not pass the required data for Automated Animations to work with it. In this case you will need to reach out to the System Devs to see about getting the information added in.  
  

### **Adding Support**  
   

Adding support for a new system depends entirely on the system. This is where you will register the relevant Hooks for the system. The Hook(s) registered is generally ``createChatMessage`` if no System specific Hooks are provided. If System specific Hooks are provided, you can register those here.  
  
At a bare minimum, Automated Animations needs access to the Item being used so this must be found somehow. There are a multitude of examples here for how to get the Item from a chat message. Automated Animations then attempts to find the ``Token`` if it is not expressely passed inside the Hook. This is usually done by the ``Token ID``, ``Token UUID``, or a general search on the Canvas based on the ``Item``.  
  
  ## **Separating Attack and Damage**
If your game system has separate rolls for items such as ``Attack`` and ``Damage``, you will need to separate out those specific Roll cases here so Animations do not play on every roll instance. ``dnd5e.js`` is a good example of using System Hooks to determine the Roll type, and a setting should be provided for users to determine which type of roll should be used to play Animations.  
  
This can get a little tricky for items that only have ``Damage`` and no ``Attack``, and items that have neither ``Damage`` nor an ``Attack``. The logic for setting all this up should be provided here with the end goal of ONLY starting the Automated Animations workflow for a single type of roll or item use.  
  
  ## **All rolls done automatically by the system**  
The ``pf1.js`` file is a good example of a system that does everything automatically for the user. This combines all actions into a single button press so there is no need to provide logic separating out ``Attack``, ``Damage``, items with ``Damage`` and no ``Attack``, and those with neither.  
  
  ## **Starting the Automated Animations workflow**  
After all necessary logic has been performed, create a new ``handler`` to grab all the relevant data for the workflow. This checks the ``Item`` and Automated Animations ``Global Menu`` for a matching Animation entry. This will return ``false`` if nothing is matched.  
  
If an animation is matched, you can then start the Automated Animations workflow using the ``router(handler)`` function provided. The ``handler`` should be passed as it contains all relevant data to start the animation process
  
  ## **Templates and Animations**  
  For Animations to play for items that have an AOE effect and use Foundry templates, this may require adding support inside Automated Animations. Reach out to the Automated Animations developer for guidance on this if needed.  Systems such as ``DnD 5e`` and ``PF2e`` pass the ``Item ID`` or ``Item UUID`` inside the flags for the template. This is the best way to play Template animations, as you can then register the ``createMeasuredTemplate`` Hook specfically to play those on template placement on the game canvas.  
    
## **Active Effects**  
Active Effects in Autoamted Animations are handled from the ``scripts`` - ``active-effects`` - ``handleActiveEffectHooks.js`` file. This shouldn't need any specific things added if the system uses the core Foundry Active Effect workflow (Everything will be registered under the default switch settings already).