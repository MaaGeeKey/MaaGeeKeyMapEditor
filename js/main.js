// main.js
// main driver of the program. contains init and loading libraries.
//
// Content:
// -includes
// -local functions
// -main
//
// jump to <main> to see entry point

// <includes>

var $ = require("jquery"),
	Config = require("./config"),
	//screenResizeHandler = require("./system/screenSize"),
	KeyMap = require("./KeyMap");

// choose to use minified version if not debugging
if (Config.debug) {
	require("./lib/mousetrap");
} else {
	//require("./lib/mousetrap.min");
}

// </includes>

// <local functions>

/**
 * Prompts for a string
 * @param {String} prompt question to be asked
 * @return the input result
 */
function _getString(prompt) {
	str = prompt(prompt);
	return str;
}

/**
 * Creates all available commands and operations of the software,
 * and their basic callbacks
 */
function _createCommandCallbacks() {
	var commandCallbacks = {
		// default
		"COMMAND_LIST": function () {
			console.log("Command list:");
			console.log(Object.keys(commandCallbacks));
		},
		"COMMAND_LIST_FILTER": function () { // TODO: unfinished
			var str = _getString("Command list keyword:");
			console.log("Command list filtered: \"" + str + "\"");
			console.log(Object.keys(commandCallbacks));
		},
		// file
		"FILE_OPEN": function () {
			console.log("File open");
		},
		"FILE_SAVE": function () {
			console.log("file save");
		},
		// insert
		"INSERT_MAP": function () {
			console.log("new map item");
		},
		"INSERT_MAPSET": function () {
			console.log("new map set item");
		},
		// setting
		"SETTING_GODMODE": function () {
			console.log("God Mode Engaged");
		},
		"COMMAND_NOTHING": function () {
			// template
		}

	}
	return commandCallbacks;
}

/**
 * Takes a keymap and map keys to commands
 * @param {array<string>} commands strings representing keyboard combinations
 */
function _bindKeys(commands, keyMap) {
	//console.log(KeyMap);
	for (var key in keyMap) {
		if (!KeyMap.hasOwnProperty(key)) continue;
		//console.log(KeyMap[key] + " " + key);
		//console.log(commands[key]);
		Mousetrap.bind(keyMap[key], commands[key]);
	};
}

// </local functions>


// <main>

// done on document load
$(function () {
	// bind windows resize to screenSize.js
	//$(window).resize(screenResizeHandler);

	// initial run
	//screenResizeHandler();

	// create a list of available commands, for extendability
	var commands = _createCommandCallbacks();

	// explicitly call this command to list available commands in the console
	commands.COMMAND_LIST();

	// bind keymap into commands
	_bindKeys(commands, KeyMap);


});

// </main>
