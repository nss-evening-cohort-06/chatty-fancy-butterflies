'use strict';

const data = require('./data');
const dom = require('./domHandler');

let list;
let pageList = [];
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
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadList();
};

const previousPage = () => {
    currentPage -= 1;
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadList();
};

const firstPage = () => {
    currentPage = 1;
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadList();
};

const lastPage = () => {
    currentPage = numberOfPages;
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadList();
};

const loadList = () => {
    loadData();      //loads global array from data.js
    setPageNumbers(); //calculates the current number of pages
    let begin = ((currentPage - 1) * numberOfMessagesPerPage);
    let end = begin + numberOfMessagesPerPage;
    pageList = list.slice(begin, end);
    dom.writeToDom(pageList); //sends the range of messages that are to be displayed to the domHandler
    check();         // determines the disabled states of the pagination buttons
};

const check = () => {
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
};