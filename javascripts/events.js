'use strict';

const getMessage = require('./messages');
const data = require('./data');
const dom = require('./domhandler');
const users = require('./users');

const getNewMessage = () => {
    let messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            getMessage(e, data.getMessages());
            document.getElementById("messageInput").value = "";    
        }  
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
        if (event.target.id === "dark") {
            makeTextDarker(event);
        } else if (event.target.id === "bigger") {
            makeTextBigger(event);
        }
    });
};

const deleteButton = () => {
    document.getElementById("messagediv").addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            let id = parseInt(event.target.id.split("-")[2]);
            let messages = data.getMessages();
                messages.forEach((message, index) => {
                    if (id === message.id) {
                        messages.splice(index, 1);
                    }
                });
            dom.writeToDom(messages);
            data.updateMessages(messages);
        }
    });
};

//gets the selected user from the user dropdown, updates the text for the dropdown, and sets the current user in user.js
const userSelection = () => {
    const userDropdownToggle = document.getElementById("user-dropdown-toggle");
    document.getElementById("user-dropdown-menu").addEventListener("click", (e) => {
        let userName = e.target.innerText; 
        if (e.target.id !== "user-dropdown-menu"){ //makes sure below only fires when a user <li> is selected
            userDropdownToggle.innerHTML = `Hello, ${userName}! <span class="caret"></span>`;
            users.setCurrentUser(userName); 
        }         
    });
};

//fires when a user is typing in the textbox and populates message div with a typing indicator
const typingIndicator = () => {
    let messageInput = document.getElementById('messageInput');
    let typingIndicator = document.getElementById("typing-indicator");
    messageInput.addEventListener('keydown', (e) =>{
        if (e.key !=="Enter"){
            typingIndicator.classList.remove("hidden");
            delay(function () {
                typingIndicator.classList.add("hidden");
            }, 500); 
        }       
    });
};

typingIndicator(); 



var delay = (function() {
	var timer = [];
	return function(callback, ms, key) {
		key = key || 0;
		clearTimeout(timer[key]);
		timer[key] = setTimeout(callback, ms);
	};
})();




module.exports = {
    getNewMessage, 
    toggleControls, 
    deleteButton,
    userSelection
};
