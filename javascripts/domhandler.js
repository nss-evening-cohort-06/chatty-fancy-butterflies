"use strict";

//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
    messagesArr.forEach((message) => {
        domString += 
            `<div class="message row" id="message-${message.id}">
                <div class="message-text col-md-9">${message.text}</div>
                <div class="message-btn col-md-3"><button class="delete-button btn btn-danger" id="delete-btn-${message.id}">Delete</button></div>
            </div>`;
    });
    messageDiv.innerHTML = domString; 
};

const populateUserOptions = (userObj) => {
    let users = userObj.names;
    let userDropdown = document.getElementById("user-dropdown");
    let userListItems = "";
    users.forEach((name) => {
        userListItems += `<li id="${name}"><a href=#>${name}</a></li>`;
    });
    userDropdown.innerHTML = userListItems; 
};


module.exports = {
    writeToDom,
    populateUserOptions
};