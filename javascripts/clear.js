"use strict";

const data = require('./data');

const addClearFxn = () => {
	const clearBtnFxn = document.getElementById("btn-clear");
	clearBtnFxn.addEventListener('click', function() {
	    document.getElementById("messagediv").innerHTML = "";
		data.updateMessages([]);
		clearBtnFxn.disabled = true;
	});
};

module.exports = {addClearFxn};
