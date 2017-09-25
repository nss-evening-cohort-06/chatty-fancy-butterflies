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
            if(document.getElementById("messageInput").value === "") {
                // do noting
            } else {
            getMessage(e, data.getMessages());
            document.getElementById("messageInput").value = "";
            }
        }  
    });    
};

const makeTextDarker = (event) => {
    if (event.target.checked === true) {
        event.target.parentNode.parentNode.nextElementSibling.classList.remove("messages");
        event.target.parentNode.parentNode.nextElementSibling.classList.add("makeTextDark");
        document.getElementById("body").classList.add("bodydarkplace");
    } else if (event.target.checked === false) {
        event.target.parentNode.parentNode.nextElementSibling.classList.remove("makeTextDark");
        event.target.parentNode.parentNode.nextElementSibling.classList.add("messages");
        document.getElementById("body").classList.remove("bodydarkplace");

    }
};

const makeTextBigger = () => {    
    const messageDiv = document.getElementById("messagediv");
    document.getElementById("make-bigger-checkbox").addEventListener("change", (e) => {
        if (e.target.checked) {
            messageDiv.classList.add("makeTextBig"); //potentially add the picsBig class to the images 
        } 
        else if (!e.target.checked) {
            messageDiv.classList.remove("makeTextBig");
        }
    });
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
    let timer = 1000; //in ms - how long the indicator will remain after the last keystroke
    messageInput.addEventListener('keydown', (e) =>{
        if (e.key !=="Enter"){ //indicator does not appear when enter is pressed 
            let typingIndicator = document.getElementById("typing-indicator-row");
            if (typingIndicator === null) { //if the typing indicator is not on the page then add it 
                dom.showTypingIndicatorRow();
                delay(function () { //sets the delay to remove the typing indicator 
                    dom.removeTypingIndicatorRow(); 
                }, timer); 
            } else { //resets the delay for each keystroke if the indicator is already on the page 
                delay(function () {
                    dom.removeTypingIndicatorRow();
                }, timer); 
            }
        } 
        else {
            dom.removeTypingIndicatorRow(); //removes the typing indicator when enter is pressed
        }           
    });
};

//delay wrapper function - used in the typingIndicator function 
const delay = (function() {
	var timer = [];
	return function(callback, ms, key) {
		key = key || 0;
		clearTimeout(timer[key]);
		timer[key] = setTimeout(callback, ms);
	};
})(); 



//gets the edited message from the edit input, and then updates its original message in the array.
const editMessage = () => {
    document.getElementById("messagediv").addEventListener("click", (event) => {
        if (event.target.classList.contains("edit-btn")) {
            let showmessage;
            let id = parseInt(event.target.id.split("-")[2]);
            let messages = data.getMessages();
                messages.forEach((message) => {
                    if (id === message.id) {
                        showmessage = message.text;
                        document.getElementById("message-text").value = showmessage;
                        document.getElementById("editid").innerHTML = id;
                    }
                });
        }
    replaceMessage();
    });
};

const replaceMessage = () => {
    document.getElementById("edit-message").addEventListener("click", () => {
        let messageToEdit = document.getElementById("message-text").value;
        let idToEdit = parseInt(document.getElementById("editid").innerHTML);
        let messages = data.getMessages();
            messages.forEach((message) => {
                if (idToEdit === message.id) {
                  message.text = messageToEdit;  
                }
            });
        dom.writeToDom(messages);
        data.updateMessages(messages);
    });
};


/******************************
 Color pickers 
 ******************************/


const backgroundColor = () => {
    let messageDiv = document.getElementById('messagediv');
    let body = document.getElementById('body');
    
    $('#message-div-color-picker').colorpicker().on('changeColor', function(e) {
        e.target.style.background = e.color.toString('rgba');
        e.target.style.color = "#eeeade"; 
        messageDiv.style.background = e.color.toString('rgba');
    });
    $('#body-color-picker').colorpicker().on('changeColor', function(e) {
        e.target.style.background = e.color.toString('rgba');
        e.target.style.color = "#eeeade"; 
        body.style.background = e.color.toString('rgba');
    });

    $('#text-color-picker').colorpicker().on('changeColor', function(e) {
        e.target.style.background = e.color.toString('rgba');
        e.target.style.color = "#eeeade"; 
        messageDiv.style.color = e.color.toString('rgba');
    });

    $('#reset-colors').on('click', (e) => {
        $('#message-div-color-picker').removeAttr("style");
        $('#body-color-picker').removeAttr("style");
        $('#text-color-picker').removeAttr("style");
        messageDiv.removeAttribute("style"); 
        body.removeAttribute("style"); 
        messageDiv.removeAttribute("style"); 
    });
};






module.exports = {
    getNewMessage, 
    makeTextBigger, 
    deleteButton,
    userSelection,
    editMessage,
    typingIndicator,
    backgroundColor
};
