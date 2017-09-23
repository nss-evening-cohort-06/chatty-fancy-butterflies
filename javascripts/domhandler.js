"use strict";


//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
    messagesArr.forEach((message) => {
        domString += 
            `<div class="message row" id="message-${message.id}">
                <div class="message-text col-md-6">${message.text}</div>
                <div class="message-text col-md-4 subtext">${message.userName} ${message.createdDate}</div>
                <div class="message-btn col-md-1 col-md-offset-1"><span class="edit-btn glyphicon glyphicon-pencil" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" id="edit-btn-${message.id}"></span><span class="delete-btn glyphicon glyphicon-trash" id="delete-btn-${message.id}"></span></div>
            </div>`;
    });
    messageDiv.innerHTML = domString; 
};

//takes the user object and populates the name in the user dropdown -- is called in data.intializer 
const populateUserOptions = (userObj) => {
    let users = userObj.names;
    let userDropdownMenu = document.getElementById("user-dropdown-menu");
    let userListItems = "";
    users.forEach((name) => {
        userListItems += `<li id="${name}"><a href=#>${name}</a></li>`;
    });
    userDropdownMenu.innerHTML = userListItems; 
};


module.exports = {
    writeToDom,
    populateUserOptions
};