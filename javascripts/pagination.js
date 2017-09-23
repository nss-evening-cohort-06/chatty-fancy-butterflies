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
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadDomList();
};

const previousPage = () => {
    currentPage -= 1;
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadDomList();
};

const firstPage = () => {
    currentPage = 1;
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadDomList();
};

const lastPage = () => {
    currentPage = numberOfPages;
    document.getElementById('pageNumber').innerHTML = `<a href='#'>Page ${currentPage}</a>`;
    loadDomList();
};

const loadDomList = () => {
    loadData();      //loads global array from data.js
    setPageNumbers(); //calculates the current number of pages
    let begin = ((currentPage - 1) * numberOfMessagesPerPage);
    let end = begin + numberOfMessagesPerPage;
    pageList = list.slice(begin, end);
    // console.log('pageList array after slice', pageList);
    dom.writeToDom(pageList); //sends the range of messages that are to be displayed to the domHandler
    // firstPage();
    check();         // determines the disabled states of the pagination buttons
};
//will need to be reconfigured for bootstrap pagination buttons
const check = () => {
    console.log('"check()" func entered');
    document.getElementsByClassName("next").disabled = currentPage === numberOfPages ? true : false;
    document.getElementsByClassName("previous").disabled = currentPage === 1 ? true : false;
    document.getElementsByClassName("first").disabled = currentPage === 1 ? true : false;
    document.getElementsByClassName("last").disabled = currentPage === numberOfPages ? true : false;
};

module.exports = {
    nextPage,
    previousPage,
    firstPage,
    lastPage,
    loadDomList
};