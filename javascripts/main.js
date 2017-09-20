"use strict";

const data = require("./data"); 
const events = require("./events.js");

events.getNewMessage();

data.initializer();
events.toggleControls();
events.deleteButton();
events.userSelection();



