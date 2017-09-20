/*

    Form Validation
    Authors: Marco and Gisselle
    Date: 9.20.17

    file: pay.js

*/


"use strict";

// GOM ~ makes the select boxes initially blank
function removeSelectDefaults() {
  var emptySelect = document.getElementsByTagName("select"); // GOM ~ gets the select elements from the DOM

  for (var i = 0; i < emptySelect.length; i++) {
    emptySelect[i].selectedIndex = -1; // GOM ~ tells DOM to turn off selected Index (the default)
  }
}

function personalInformation() {

}

function validateForm() {
  // if (evt.preventfault) {
  //   evt.preventDefault();
  // }
  // else {
  //   evt.returnValue = false;
  // }
  // formValidity = true;
  //
  // personalInformation();
}


// creates event listeners for functions you dont necissarily want to work as soon as the page loads
function createEventListeners() {
  var submit = document.getElementsByTagName("form")[0];
  if (submit.addEventListener) {
    submit.addEventListener("submit", validateForm, false);
  } else if (submit.attachEvent) {
    submit.attachEvent("onsubmit", validateForm);
  }
}

// GOM ~ functions will carry out as soon as the page loads
function setUpPage() {
  createEventListeners();
  removeSelectDefaults();
}

// GOM ~ Loads the functions in set up page as soon as the page loads
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
