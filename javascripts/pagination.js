'use strict';

const data = require('./data');
const dom = require('./domHandler');

let list;
let pageList = []; //holds range of messages to be displayed
let currentPage = 1;
let numberOfMessagesPerPage = 20;
let numberOfPages = 1; 

const loadData = () => {
    list = data.getMessages();
};

const setPageNumbers = () => {
    numberOfPages = getNumberOfPages();
};

const getNumberOfPages = () => {
    return Math.ceil(list.length / numberOfMessagesPerPage);
};

const nextPage = () => {
    currentPage += 1;
    loadDomList();
};

const previousPage = () => {
    currentPage -= 1;
    loadDomList();
};

const firstPage = () => {
    currentPage = 1;
    loadDomList();
};

const lastPage = () => {
    currentPage = numberOfPages;
    loadDomList();
};

const loadDomList = () => {
    loadData();      //loads global array from data.js
    setPageNumbers(); //calculates the current number of pages
    let begin = ((currentPage - 1) * numberOfMessagesPerPage);
    let end = begin + numberOfMessagesPerPage;
    pageList = list.slice(begin, end);
    dom.writeToDom(pageList); //sends the range of messages that are to be displayed to the domHandler
    check();         // determines the disabled states of the pagination buttons
};

const check = () => {
    console.log('"check()" func entered');
    document.getElementById("next").disabled = currentPage === numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage === 1 ? true : false;
    document.getElementById("first").disabled = currentPage === 1 ? true : false;
    document.getElementById("last").disabled = currentPage === numberOfPages ? true : false;
};

module.exports = {
    nextPage,
    previousPage,
    firstPage,
    lastPage,
    loadDomList,
    loadData
};