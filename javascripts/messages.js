'use strict';

const timeStamp = require('./timeStamp.js');

const data = require('./data');
const dom = require('./domhandler');
const users = require('./users');

//creates new message object and calls writeToDom to print to the page
const getMessage = (e, messages) => {
    let id = messages.length + 1;       
    let newMessage = document.getElementById('messageInput').value;
    let messageValue = {
        "id": id,
        "text": `${newMessage}`,
        "userName": `${users.getCurrentUser()}`,
        "createdDate": timeStamp()
    };
    messages.push(messageValue);
    dom.writeToDom(messages);
    data.updateMessages(messages);
};

module.exports = getMessage;
