'use strict';

const timeStamp = require('./timeStamp.js');

const data = require('./data');
const printToDom = require('./domhandler');

const getMessage = (e, messages) => {
    let id = messages.length + 1;       
    let newMessage = document.getElementById('messageInput').value;
    let messageValue = {
        "id": id,
        "text": `${newMessage}`,
        "userId": 1,
        "createdDate": timeStamp()
    };
    messages.push(messageValue);
    printToDom(messages);
    data.updateMessages(messages);
};

module.exports = getMessage;