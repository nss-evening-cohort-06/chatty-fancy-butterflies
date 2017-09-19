"use strict";

const makeTextDarker = (event) => {
    if (event.target.checked === true) {
        event.target.parentNode.nextElementSibling.classList.add("makeTextDark");
    } else if (event.target.checked === false) {
        event.target.parentNode.nextElementSibling.classList.remove("makeTextDark");
    }
};

const makeTextBigger = (event) => {
    if (event.target.checked === true) {
        event.target.parentNode.nextElementSibling.classList.add("makeTextBig");
    } else if (event.target.checked === false) {
        event.target.parentNode.nextElementSibling.classList.remove("makeTextBig");
    }
};

const toggleControls = () => {
    document.getElementById("selectordiv").addEventListener("change", (event)=> {
        // console.log(event);
        if (event.target.id === "dark") {
            // console.log("darker");
            makeTextDarker(event);
        } else if (event.target.id === "bigger") {
            // console.log("bigger");
            makeTextBigger(event);
        }
    });
};

module.exports = toggleControls;


