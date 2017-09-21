/*

    Form Validation
    Authors: Marco and Gisselle
    Date: 9.20.17

    file: pay.js

*/


"use strict";
// GOM ~ Global Variables
var formValidity = true;

// GOM ~ makes the select boxes initially blank
function removeSelectDefaults() {
  var emptySelect = document.getElementsByTagName("select"); // GOM ~ gets the select elements from the DOM

  for (var i = 0; i < emptySelect.length; i++) {
    emptySelect[i].selectedIndex = -1; // GOM ~ tells DOM to turn off selected Index (the default)
  }
}

function select() {
  var selectElements
  
  for (var i = 0; i < elementCount; i++) {
    currentElement = selectElements[i];
    if (currentElement.selectedIndex === -1) { //GOM ~ Error
      currentElement.style.border = "1px solid red";
      fieldsetValidity = false
    }
    else { //GOM ~ Data is ok
      currentElement.style.border = "";
    }
  }
}

// GOM ~ invalidates the input elements if not filled out
function inputs() {
  //GOM ~ variables
  var inputElements = document.getElementsByTagName("input");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var elementCount = inputElements.length;
  var currentElement;


  // GOM ~ code for the actual validation of the function
  try {
    // GOM ~ checks to see if the user put anything in each field
    for (var i = 0; i < elementCount; i++) {
      currentElement = inputElements[i];
      if (currentElement.value === "") {
        currentElement.style.background = "rgb(255, 100, 100)";
        fieldsetValidity = false;
      } else {
        currentElement.style.background = "white";
      }
    }

    if (fieldsetValidity === false) { // GOM ~ Is the error message clients see
        throw "Please complete the indicated issues";
    }
    else { // GOM ~ removes error message
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }

}

function validateForm(evt) {
  // GOM ~ Prevents the form from submiting prematurely
  if (evt.preventfault) {
    evt.preventDefault();
  }
  else {
    evt.returnValue = false;
  }
  formValidity = true;

  inputs();
  select();

  if (formValidity === true) { //GOM ~ form is valid
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  }
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
