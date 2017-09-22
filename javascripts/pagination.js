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
    console.log('"list" array value from "loadData": ',list);
};

const setPageNumbers = () => {
    console.log('setPageNumbers entered');
    numberOfPages = getNumberOfPages();
};

const getNumberOfPages = () => {
    console.log('getNumberOfPages entered');
    return Math.ceil(list.length / numberOfMessagesPerPage);
};

const nextPage = () => {
    console.log('next page clicked');
    currentPage += 1;
    loadList();
};

const previousPage = () => {
    console.log('previous page clicked');
    currentPage -= 1;
    loadList();
};

const firstPage = () => {
    console.log('first page clicked');
    currentPage = 1;
    loadList();
};

const lastPage = () => {
    console.log('last page clicked');
    currentPage = numberOfPages;
    loadList();
};

const loadList = () => {
    loadData();
    let begin = ((currentPage - 1) * numberOfMessagesPerPage);
    let end = begin + numberOfMessagesPerPage;
    pageList = list.slice(begin, end);
    dom.writeToDom(pageList);
    check();         // determines the states of the pagination buttons
};

const check = () => {
    console.log('"check" function entered');
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