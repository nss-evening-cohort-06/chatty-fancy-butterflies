"use strict";

//var moment = require('../lib/node_modules/moment/moment.js');


let currentEffect = "SnapChat"; 

const setCurrentEffect = (effectNameStr) => {
    currentEffect = effectNameStr; 
};

const getCurrentEffect = () => {
    return currentEffect; 
};


module.exports = {
    setCurrentEffect,
    getCurrentEffect
};