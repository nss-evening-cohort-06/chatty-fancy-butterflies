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

//adds pagination buttons to the dom
const printPagination = () => {
    let paginationDiv = document.getElementById('paginationDiv');
    let domString =
        `<div class='row'>
            <div class='text-center'> 
                <input type="button" class='btn btn-default' id="first" value="first" />
                <input type="button" class='btn btn-default' id="next" value="next" />
                <input type="button" class='btn btn-default' id="previous" value="previous" />
                <input type="button" class='btn btn-default' id="last" value="last" />
            </div>    
        </div>`;
        paginationDiv.innerHTML = domString;
};

module.exports = {
    writeToDom,
    populateUserOptions,
    printPagination
};