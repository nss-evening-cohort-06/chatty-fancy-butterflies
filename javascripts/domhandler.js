"use strict";


//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
    messagesArr.forEach((message) => {
        domString += 
            `<div class="message row" id="message-${message.id}">
                <div class="message-text col-md-6">${message.text}</div>
                <div class="message-text col-md-4">${message.createdDate}</div>
                <div class="message-btn col-md-2"><button class="delete-btn-${message.id}">Delete</button></div>
            </div>`;
    });
    messageDiv.innerHTML = domString; 
};

module.exports = writeToDom;