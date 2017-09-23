'use strict';

const data = require('./data');
let rangeArray = [];

//function to determine the range of messages to be displayed on each new pagination page
const messageRanges = (globalArray) => {
    rangeArray = data.getMessages();
    console.log(rangeArray);
};

module.exports = messageRanges;