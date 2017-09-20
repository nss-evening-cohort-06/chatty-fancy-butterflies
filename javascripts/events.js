'use strict';

const getMessage = require('./messages');
const initialMessages = require('./data');

const getNewMessage = () => {
    let messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getMessage(e, initialMessages.getInitialMessages());
        }
    });
};

const deleteMessage = () => {
    
};

module.exports = {getNewMessage, deleteMessage};