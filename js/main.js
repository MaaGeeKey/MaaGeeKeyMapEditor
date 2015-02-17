// includes
require("./lib/mousetrap");
var $ = require("jquery"),
	//screenResizeHandler = require("./system/screenSize"),
	KeyMap = require("./KeyMap");

// entry point of the program
// done on document load
$(function () {
	// bind windows resize to screenSize.js
	//$(window).resize(screenResizeHandler);
	// initial run
	//screenResizeHandler();
	bindKeys();


});

function bindKeys() {

}
