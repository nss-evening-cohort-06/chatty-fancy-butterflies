'use strict';

const timeStamp = require('./timeStamp.js');
const pagination = require('./pagination');
const data = require('./data');
const dom = require('./domhandler');
const users = require('./users');
const events = require('./events');

//creates new message object and calls writeToDom to print to the page       
const getMessage = (messages) => {
    let id = messages.length;       
    let newMessage = document.getElementById('messageInput').value;
    let messageValue = {
        "id": id,
        "text": `${newMessage}`,
        "userName": `${users.getCurrentUser()}`,
        "createdDate": timeStamp()
    };
    if (messages.length > 20) {
        document.getElementById("messagediv").innerHTML = "";
        dom.printPagination();
        // dom.writeToDom(pagination.loadData());
    }
        messages.push(messageValue);
        pagination.lastPage();
        // dom.writeToDom(messages);
        data.updateMessages(messages);
};

module.exports = getMessage;
