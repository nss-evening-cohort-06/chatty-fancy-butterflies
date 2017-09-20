'use strict';

const data = require('./data');
const printToDom = require('./domhandler');

// const timeStamp = () => {
//     let dt = new Date();
//     let utcDate = dt.toLocaleString(["America/Chicago"]);
//     return utcDate;
// };

const getMessage = (e, messages) => {
    let id = messages.length + 1;       
    let newMessage = document.getElementById('messageInput').value;
    let messageValue = {
        "id": id,
        "text": `${newMessage}`,
        "userId": 1,
        "timeStamp": null//timeStamp()
    };
    messages.push(messageValue);
    printToDom(messages);
    data.updateMessages(messages);
};

module.exports = getMessage;