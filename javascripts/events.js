'use strict';

const getMessage = require('./messages');
const xhrRequest = require('./xhr');

let getNewMessage = () => {
    let messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getMessage(e, xhrRequest);
        }
    });
};

let deleteMessage = () => {
    
};

module.exports = getNewMessage;