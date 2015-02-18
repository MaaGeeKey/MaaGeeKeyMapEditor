// <includes>

var $ = require("jquery"),
    Config = require("config"),
    //screenResizeHandler = require("./system/screenSize"),
    KeyMap = require("./KeyMap");

if (Config.debug) {
    require("./lib/mousetrap");
} else {
    require("./lib/mousetrap.min");
}

// </includes>

// <main>

// done on document load
$(function () {
    // bind windows resize to screenSize.js
    //$(window).resize(screenResizeHandler);
    // initial run
    //screenResizeHandler();
    var commands = _createCommandCallbacks();
    _bindKeys(commands);


});
// </main>

// <local functions>

/**
 * Takes a keymap and map keys to commands
 * @param {array<string>} commands strings representing keyboard combinations
 */
function _bindKeys(commands) {
    console.log(KeyMap);
    for (var key in KeyMap) {
        if (!KeyMap.hasOwnProperty(key)) continue;
        //console.log(KeyMap[key] + " " + key);
        //console.log(commands[key]);
        Mousetrap.bind(KeyMap[key], commands[key]);
    };
}

/**
 * Creates all available commands and operations of the software,
 * and their basic callbacks
 */
function _createCommandCallbacks() {
    var commandCallbacks = {
        "COMMAND_LIST": function () {
            console.log("Command list:")
            console.log(Object.keys(commandCallbacks));
        },
        "FILE_OPEN": function () {
            console.log("File open");
        },
        "FILE_SAVE": function () {
            console.log("file save");
        },
        "INSERT_MAP": function () {
            console.log("new map item");
        },
        "INSERT_MAPSET": function () {
            console.log("new map set item");
        },
        "SETTING_GODMODE": function () {
            console.log("God Mode Engaged");
        },
        "COMMAND_NOTHING": function () {
            //
        }

    }
    return commandCallbacks;
}

// </local functions>
