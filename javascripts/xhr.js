"use strict"; 

const loadMessages = (success, error) => {
    const categoryLoader = new XMLHttpRequest();
    categoryLoader.addEventListener("error", error);
    categoryLoader.addEventListener("load", success);
    categoryLoader.open("GET", "../data/messages.json");
    categoryLoader.send();
};

module.exports = loadMessages; 