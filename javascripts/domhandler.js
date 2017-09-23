"use strict";

//takes an array of message objects, builds a dom string, and inserts into the messageDiv -- is called when in the whenMessagesLoad function and whenever the messages are refreshed
const writeToDom = (messagesArr) => {
    let messageDiv = document.getElementById("messagediv");
    let domString = "";
    messagesArr.reverse().forEach((message) => {
        domString += 
            `<div class="message row" id="message-${message.id}">
                <div class="message-text col-md-6">${message.text}</div>
                <div class="message-text col-md-2 subtext">${message.userName} ${message.createdDate}</div>
                <div class="message-btn col-md-2"><button class="delete-btn glyphicon glyphicon-trash btn btn-danger" id="delete-btn-${message.id}"></span></button></div>
                <div class="message-btn col-md-2"><button class="edit-btn glyphicon glyphicon-pencil btn btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" id="edit-btn-${message.id}"></span></button></div>
            </div>`;
    });
    messageDiv.innerHTML = domString;
    messagesArr.reverse(); 
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
    let paginationDivTop = document.getElementById('paginationDivTop');
    let paginationDivBtm = document.getElementById('paginationDivBtm');
    let domString =
        `<div class='row'>
            <div class='text-center'> 
            <nav aria-label="Page navigation example">
            <ul class="pagination pagination-sm">
              <li class="page-item"><a class='first' class="page-link" href="#">First</a></li>
              <li class="page-item">
                <a class='previous' class="page-link" href="#" aria-label="Previous">
                    <span class='previousBtn' aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                <li class="page-item">
                <a class='next' class="page-link" href="#" aria-label="Next">
                    <span class='nextBtn' aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
              <li class="page-item"><a class='last' class="page-link" href="#">Last</a></li>
            </ul>
          </nav>    
        </div>`;
    paginationDivTop.innerHTML = domString;    
    paginationDivBtm.innerHTML = domString;
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
    printPagination,
    showTypingIndicatorRow,
    removeTypingIndicatorRow
};