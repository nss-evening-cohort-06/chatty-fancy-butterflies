"use strict";

//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
    messagesArr.forEach((message) => {
        domString += 
            `<div class="message row" id="message-${message.id}">
                <div class="message-text col-md-6">${message.text}</div>
                <div class="message-text col-md-2 subtext">${message.userName} ${message.createdDate}</div>
                <div class="message-btn col-md-2"><button class="delete-btn glyphicon glyphicon-trash btn btn-danger" id="delete-btn-${message.id}"></span></button></div>
                <div class="message-btn col-md-2"><button class="edit-btn glyphicon glyphicon-pencil btn btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" id="edit-btn-${message.id}"></span></button></div>
            </div>`;
    });
    messageDiv.innerHTML = domString; 
};

//takes the user object and populates the name in the user dropdown -- is called in data.intializer 
const populateUserOptions = (userObj) => {
    let users = userObj.names;
    let userDropdownMenu = document.getElementById("user-dropdown-menu");
    let userListItems = "";
    users.forEach((name) => {
        userListItems += `<li id="${name}"><a href=#>${name}</a></li>`;
    });
    userDropdownMenu.innerHTML = userListItems; 
};


const showTypingIndicatorRow = () => {
    let messageDiv = document.getElementById("messagediv");
    let messageDivChild = messageDiv.firstChild; 
    let typingIndicatorDiv = document.createElement("div");
    //messageDiv.appendChild(typingIndicatorDiv); //need to decide if we want the indicator at the top or bottom of the message div
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
    typingIndicatorDiv.remove();  
 };


module.exports = {
    writeToDom,
    populateUserOptions,
    showTypingIndicatorRow,
    removeTypingIndicatorRow
};