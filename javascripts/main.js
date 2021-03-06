"use strict";

const data = require("./data"); 
const events = require("./events.js");
const clear = require("./clear.js");


events.getNewMessage();

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

