'use strict';

const getMessage = require('./messages');
const initialMessages = require('./data');

const preventFormSubmission= () => {
    return false;
};

const getNewMessage = () => {
    let messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', (e) => {
        if (key === 13) {
            preventFormSubmission();
        }   
        getMessage(e, initialMessages.getInitialMessages()); 
    });    
};
const makeTextDarker = (event) => {
    if (event.target.checked === true) {
        event.target.parentNode.nextElementSibling.classList.remove("messages");
        event.target.parentNode.nextElementSibling.classList.add("makeTextDark");
    } else if (event.target.checked === false) {
        event.target.parentNode.nextElementSibling.classList.remove("makeTextDark");
        event.target.parentNode.nextElementSibling.classList.add("messages");
    }
};

const makeTextBigger = (event) => {
    if (event.target.checked === true) {
        event.target.parentNode.nextElementSibling.classList.add("makeTextBig");
    } else if (event.target.checked === false) {
        event.target.parentNode.nextElementSibling.classList.remove("makeTextBig");
    }
};

const toggleControls = () => {
    document.getElementById("selectordiv").addEventListener("change", (event)=> {
        // console.log(event);
        if (event.target.id === "dark") {
            // console.log("darker");
            makeTextDarker(event);
        } else if (event.target.id === "bigger") {
            // console.log("bigger");
            makeTextBigger(event);
        }
    });
};

<<<<<<< HEAD
const deleteMessage = () => {
    
};

module.exports = {getNewMessage, deleteMessage};
=======
module.exports = toggleControls;


>>>>>>> master
