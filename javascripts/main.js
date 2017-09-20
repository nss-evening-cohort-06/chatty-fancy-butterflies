"use strict";

const getNewMessage = require('./events');
getNewMessage();
const data = require("./data"); 
const events = require("./events.js");

console.log("I'm a dirty daddy");

data.initializer();
events();


