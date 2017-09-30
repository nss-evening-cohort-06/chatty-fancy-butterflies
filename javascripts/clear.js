"use strict";

const data = require('./data');
const dom = require('./domhandler');

//clears all messages from the main container and disables the clear button
const addClearFxn = () => {
	const clearBtnFxn = document.getElementById("btn-clear");
	clearBtnFxn.addEventListener('click', function() {
		data.updateMessages([]);
		dom.writeToDom(data.getCurrentMessages());
		clearBtnFxn.disabled = true;		
	});
};

module.exports = {addClearFxn};
