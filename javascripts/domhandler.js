"use strict";

const users = require('./users.js');

//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
        messagesArr.forEach((message) => { 
        if(!message.userName) {message.userName = "Mystery Daddy";}
        let index = users.getUsers().names.indexOf(`${message.userName}`);
        let profileImage = "./images/profile_pics/p_" + `${index}` + ".jpg";
        domString += 
            `<div class="message row" id="message-${message.id}">
                <div class="message-text col-md-2 col-sm-2 col-xs-2"><img class="pics" src="${profileImage}"><span>${message.userName}</span></div>
                <div class="message-text col-md-6 col-sm-4 col-xs-4">${message.text}</div>
                <div class="message-text col-md-2 col-sm-3 col-xs-3 subtext">${message.createdDate}</div>
                <div class="message-btn col-md-2 col-sm-3 col-xs-3"><span class="delete-btn glyphicon glyphicon-trash" id="delete-btn-${message.id}"></span>&nbsp&nbsp<span class="edit-btn glyphicon glyphicon-pencil" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" id="edit-btn-${message.id}"></span></div>
                <!--<div class="message-btn col-md-2"></div>-->
            </div>`;
        });
    messageDiv.innerHTML = domString;
    checkForNoMessages(messagesArr); 
};

const checkForNoMessages = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    if (messagesArr.length === 0) {
        messageDiv.innerText = "There are no messages to dispay, daddy";
        messageDiv.style.textAlign = "center";
    }
};

//takes the user object and populates the name in the user dropdown -- is called in data.intializer 
const populateUserOptions = (userObj) => {
    let users = userObj.names;
    let userDropdownMenu = document.getElementById("user-dropdown-menu");
    let userListItems = "";
    users.forEach((name) => {
        if (name !== "Mystery Daddy") {
            userListItems += `<li id="${name}"><a href=#>${name}</a></li>`;
        }         
    });
    userDropdownMenu.innerHTML = userListItems; 
};


const showTypingIndicatorRow = () => {
    let messageDiv = document.getElementById("messagediv");
    let messageDivChild = messageDiv.firstChild; 
    let typingIndicatorDiv = document.createElement("div");
    messageDiv.insertBefore(typingIndicatorDiv, messageDivChild);
    typingIndicatorDiv.setAttribute("id", "typing-indicator-row");
    typingIndicatorDiv.classList.add("row");
    typingIndicatorDiv.classList.add("message");
    let columnString = 
        `<div class="typing-indicator-column col-md-12"><a href="#"><img id="img-message" src="./images/Message.svg" ></a></div>`;
    typingIndicatorDiv.innerHTML += columnString;  
 };

 const removeTypingIndicatorRow = () => {
    let typingIndicatorDiv = document.getElementById("typing-indicator-row");
    if (typingIndicatorDiv) {
        typingIndicatorDiv.remove(); 
    }     
 };


module.exports = {
    writeToDom,
    populateUserOptions,
    showTypingIndicatorRow,
    removeTypingIndicatorRow
};