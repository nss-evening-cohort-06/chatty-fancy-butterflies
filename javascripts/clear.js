"use strict";

const data = require('./data');
const dom = require('./domhandler');

const addClearFxn = () => {
	const clearBtnFxn = document.getElementById("btn-clear");
	clearBtnFxn.addEventListener('click', function() {
		data.updateMessages([]);
		dom.writeToDom(data.getMessages());		
	});
};

module.exports = {addClearFxn};
