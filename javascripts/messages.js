'use strict';

const getMessage = (e, objectArray) => {
    let messageArray = [];
    messageArray = objectArray;         
    let messageValue = document.getElementById('messageInput').value;
    if (e.key === 'Enter') {
        messageArray.push(messageValue);
    }
    return messageArray;
};

module.exports = getMessage;