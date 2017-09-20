"use strict";

const data = require("./data"); 
const events = require("./events.js");
const clear = require("./clear.js");

events.getNewMessage();

data.initializer();
events.toggleControls();
clear.addClearFxn();


//console.log(moment().format('llll'));