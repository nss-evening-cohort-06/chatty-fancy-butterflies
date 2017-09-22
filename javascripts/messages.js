'use strict';

const timeStamp = require('./timeStamp.js');

const data = require('./data');
const dom = require('./domhandler');
const users = require('./users');

const getMessage = (messages) => {
    let id = messages.length + 1;       
    let newMessage = document.getElementById('messageInput').value;
    let messageValue = {
        "id": id,
        "text": `${newMessage}`,
        "userName": `${users.getCurrentUser()}`,
        "createdDate": timeStamp()
    };
    if (messages.length > 20) {
        dom.printPagination();
    }
    messages.push(messageValue);
    dom.writeToDom(messages);
    data.updateMessages(messages);
};

module.exports = getMessage;
