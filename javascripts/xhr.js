"use strict"; 

const loadMessages = (success, error) => {
    const categoryLoader = new XMLHttpRequest();
    categoryLoader.addEventListener("error", error);
    categoryLoader.addEventListener("load", success);
    categoryLoader.open("GET", "../data/messages.json");
    categoryLoader.send();
};

const loadEmojis = (success, error) => {
    const emojiLoader = new XMLHttpRequest();
    emojiLoader.addEventListener("error", error);
    emojiLoader.addEventListener("load", success);
    emojiLoader.open("GET", "../data/emojis.json");
    emojiLoader.send();
};

module.exports = {loadMessages, loadEmojis}; 