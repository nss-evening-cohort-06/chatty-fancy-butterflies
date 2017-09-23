"use strict";

var moment = require('../lib/node_modules/moment/moment.js');

function getTimeCreated() {
	return moment().format('llll');
}

module.exports = getTimeCreated;