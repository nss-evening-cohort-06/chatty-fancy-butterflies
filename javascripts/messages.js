'use strict';

const data = require('./data');
const writeToDom = require('./domhandler');

data.storeMessage(obj);


const getMessage = (e, messages) => {
    let id = messages.length + 1;
    console.log(id); 
    console.log('message array with only initial messages:',messages);         
    if (e.key === 'Enter') {
        let newMessage = document.getElementById('messageInput').value;
        let messageValue = {
            "id": `${id}`,
            "text": `${newMessage}`,
            "userId": 1,
            "createdDate": null
        };
        messages.push(messageValue);
        console.log('message array with new message:',messages);
        writeToDom(messages);
    }
};

module.exports = getMessage;