'use strict';

const data = require('./data');
const dom = require('./domhandler');

const getMessage = (e, messages) => {
    let id = messages.length + 1;       
    let newMessage = document.getElementById('messageInput').value;
    let messageValue = {
        "id": id,
        "text": `${newMessage}`,
        "userId": 1,
        "createdDate": null
    };
    messages.push(messageValue);
    dom.writeToDom(messages);
    data.updateMessages(messages);
};

module.exports = getMessage;