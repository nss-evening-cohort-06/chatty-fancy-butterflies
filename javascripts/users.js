"use strict";

let users = {
    names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
  };

let currentUser = ""; 

const getUsers = () => {
    return users;
 }; 

 const getCurrentUser = () => {
     return currentUser;
 };

 const setCurrentUser = (userNameStr) => {
     currentUser = userNameStr; 
 };


module.exports = {
    getUsers,
    getCurrentUser,
    setCurrentUser
};
