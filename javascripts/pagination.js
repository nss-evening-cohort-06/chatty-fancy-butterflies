'use strict';

const data = require('data');

let list = data.getMessages();
let pageList = [];
let currentPage = 1;
let numberPerPage = 20;
let numberOfPages = 1; 

const setPageNumbers = () => {
    numberOfPages = getNumberOfPages();
};

const getNumberOfPages = () => {
    return Math.ceil(list.length / numberPerPage);
};

const nextPage = () => {
    currentPage += 1;
    loadList();
};

const previousPage = () => {
    currentPage -= 1;
    loadList();
};

const firstPage = () => {
    currentPage = 1;
    loadList();
};

const lastPage = () => {
    currentPage = numberOfPages;
    loadList();
};

const loadList = () => {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();    // draws out our data
    //check();         // determines the states of the pagination buttons
};

const drawList = () => {
    document.getElementById("list").innerHTML = "";
    
    for (let r = 0; r < pageList.length; r++) {
        document.getElementById("list").innerHTML += pageList[r] + "";
    }
};