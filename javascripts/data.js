"use strict";

const dom = require("./domhandler");
const loadMessages = require("./xhr");
const users = require("./users");
const messagesFile = require("./messages");

let messagesArr = [];

//throws error if error on JSON load
const logError = () => {
    console.log("You broke me");
};

//parses JSON data into an array and calls the print to dom function -- runs when the JSON file is loaded 
const whenMessagesLoad = function () {
    messagesArr = JSON.parse(this.responseText).messages;
    messagesFile.setMessageId(messagesArr.length); 
    dom.writeToDom(messagesArr);
};

//initializer kicks off the XHR --called on main.js
const initializer = () => {
  loadMessages(whenMessagesLoad, logError);
  dom.populateUserOptions(users.getUsers());
};

//getter for array containing messages in the json file 
const getMessages = () => {
    return messagesArr;
  };

//updates the global message array 
const updateMessages = (messageArray) => {
    messagesArr = messageArray; 
};

module.exports = {
    initializer,
    getMessages,
    updateMessages
};