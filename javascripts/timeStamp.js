"use strict";

var moment = require('../lib/node_modules/moment/moment.js');

console.log("in timeStamp.js");

function getTimeCreated() {
	return moment().format('llll');
}

module.exports = getTimeCreated;