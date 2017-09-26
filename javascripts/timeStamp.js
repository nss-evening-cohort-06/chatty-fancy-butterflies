"use strict";

var moment = require('../lib/node_modules/moment/moment.js');

//adds timestamp to each message
function getTimeCreated() {
	return moment().format('llll');
}

module.exports = getTimeCreated;