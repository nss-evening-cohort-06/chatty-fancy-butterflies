"use strict";

const dom = require("./domhandler");
const loadMessages = require("./xhr");
const users = require("./users");

let messages = [];
let emojis = [];

//throws error if error on JSON load
const logError = () => {
    console.log("You broke me");
};

//parses JSON data into an array and calls the print to dom function -- runs when the JSON file is loaded 
const whenMessagesLoad = function () {
    messages = JSON.parse(this.responseText).messages;
    loadMessages.loadEmojis(whenEmojisLoad, logError);
    dom.writeToDom(messages);
};

const whenEmojisLoad = function () {
    emojis = JSON.parse(this.responseText);
    console.log(emojis);
};

//initializer kicks off the XHR --called on main.js
const initializer = () => {
  loadMessages.loadMessages(whenMessagesLoad, logError);
  dom.populateUserOptions(users.getUsers());
};

//getter for array containing messages in the json file 
const getMessages = () => {
    return messages;
  };

const updateMessages = (messageArray) => {
    messages = messageArray; 
};

module.exports = {
    initializer,
    getMessages,
    updateMessages
};