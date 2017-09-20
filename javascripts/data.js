"use strict";

const printToDom = require("./domhandler");
const loadMessages = require("./xhr");

let messages = [];

//throws error if error on JSON load
const logError = () => {
    console.log("You broke me");
};

//parses JSON data into an array and calls the print to dom function -- runs when the JSON file is loaded 
const whenMessagesLoad = function () {
    messages = JSON.parse(this.responseText).messages;
    printToDom(messages);
};

//initializer kicks off the XHR --called on main.js
const initializer = () => {
  loadMessages(whenMessagesLoad, logError);
};

//getter for array containing messages in the json file 
const getInitialMessages = () => {
    return messages;
  };

const storeMessage = (messageObj) => {
    messages.push(messageObj); 
};

module.exports = {
    initializer,
    getInitialMessages,
    storeMessage
};