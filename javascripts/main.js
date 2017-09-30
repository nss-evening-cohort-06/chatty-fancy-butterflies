"use strict";

const data = require("./data"); 
const events = require("./events.js");
const clear = require("./clear.js");
const messageFile = require("./messages.js");




data.initializer();
events.makeTextBigger();
events.deleteButton();
events.userSelection();
clear.addClearFxn();
events.deleteButton();
events.editMessage();
events.changeMessagePage();
events.typingIndicator();  
events.backgroundColor(); 
events.getNewMessage();


