'use strict';

const timeStamp = require('./timeStamp.js');
const pagination = require('./pagination');
const data = require('./data');
const dom = require('./domhandler');
const users = require('./users');

let messageId = 0; 

const setMessageId = (num) => {
    messageId = num; 
};

//creates new message object and calls writeToDom to print to the page  
//takes the messages array which it then adds messageValue to     
const createNewMessage = (newMessage) => {
    let messages = data.getCurrentMessages();     
    let messageValue = {
        "id": messageId,
        "text": `${newMessage}`,
        "userName": `${users.getCurrentUser()}`,
        "createdDate": timeStamp()
    };
    if (messages.length > pagination.numberOfMessagesPerPage) { ///CHANGED from HARDCODED 20 
        //document.getElementById("messagediv").innerHTML = ""; //removed this - should be handled in printToDom
        dom.printPagination(); 
    }
        messages.unshift(messageValue);
        messageId ++; 
        pagination.firstPage();
        data.updateMessages(messages);

};

module.exports = {
    createNewMessage,
    setMessageId
};
