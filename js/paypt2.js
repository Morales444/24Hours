/*

    Form Validation
    Authors: Marco and Gisselle
    Date: 9.20.17

    file: pay.js

*/


"use strict";





function createEventListeners() {

}

function setUpPage() {
  createEventListeners();
}

// GOM ~ Loads the functions in set up page as soon as the page loads 
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
