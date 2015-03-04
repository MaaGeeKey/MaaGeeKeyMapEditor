// keyBind.js

/*
#SUPPORTED KEYS

For modifier keys you can use shift, ctrl, alt, option, meta, and command.
Other special keys are backspace, tab, enter, return, capslock, esc, escape,
    space, pageup, pagedown, end, home, left, up, right, down, ins, and del.
Any other key you should be able to reference by name like a, /, $, *, or =.
 */
module.exports = (function () {
	var constants = {
		"lf2net": "l f 2 . n e t",
		"konami": "up up down down left right left right b a",
		"command_SAndControl_S": "mod+s"
	};
	var keyMap = {
		//command:keyName
		"COMMAND_LIST": ["h h h", "h a"],
		"FILE_OPEN": ["mod+o"],
		"FILE_SAVE": ["mod+s"],
		"INSERT_MAP": ["m"],
		"INSERT_MAPSET": ["shift+m", "shift+e shift+r"],
		"SETTING_GODMODE": [constants.lf2net, constants.konami]
	};
	return keyMap;
})();
