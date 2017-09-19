"use strict";

//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
    messagesArr.forEach((message) => {
        domString += 
            `<div class="message-container" id="message-${message.id}">
                <div class="message-text">${message.text}</div>
                <div class="message-btn"><button class="delete-btn-${message.id}"></button></div>
            </div>`;
    });
    messageDiv.innerHTML = domString; 
};

module.exports = writeToDom; 