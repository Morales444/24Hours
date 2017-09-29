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

function cardType() { //MT- Validates the radio buttons to make sure one was checked
  var cards = document.getElementsByName("Payment");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;

  try {
    if (!cards[0].checked && !cards[1].checked && !cards[2].checked && !cards[3].checked) { //MT- the error case, no radio buttons checked
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.outline = "1px solid red";
      }
      fieldsetValidity = false;
    } else { //MT- takes away the CSS if case is a success
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.outline = "";
      }
    }
    if (fieldsetValidity === false) { //MT- throws the error message
      throw "Please complete the indicated issues";
    } else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  } catch (msg) { //MT- displays the error
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }


}



function select() {
  var selectElement = document.getElementsByTagName("select");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var elementCount = selectElement.length;
  var currentElement;

  try {
    for (var i = 0; i < elementCount; i++) {
      currentElement = selectElement[i];
      if (currentElement.selectedIndex === -1) { //GOM ~ Error
        currentElement.style.border = "3px solid red";
        fieldsetValidity = false
      } else { //GOM ~ Data is ok
        currentElement.style.border = "";
      }
    }

    if (fieldsetValidity === false) { // GOM ~ Is the error message clients see
      throw "Please complete the indicated issues";
    } else { // GOM ~ removes error message
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";

    }

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}

// GOM ~ invalidates the input elements if not filled out
function inputs() {
  //GOM ~ variables
  var inputElements = document.getElementsByClassName("input");
  var selectElement = document.getElementsByTagName("select");
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
    } else { // GOM ~ removes error message
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }

}

function validateCardNum() { //MT- Regular expression for amount of digits in card number (WORK STILL IN PROGRESS)
  var ccNumElement = document.getElementsByName("number")[0];
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

  //MT- Validation to see if the cvv number is 3 or 4 digits
  try {
    if (/^[0-9]{15,16}$/i.test(ccNumElement.value)) {
        ccNumElement.style.outline = "";


    } else {//MT- error case
      ccNumElement.style.background = "rgb(255, 100, 100)";
      ccNumElement.style.outline = "1px solid red";
      ccNumElement.placeholder = "Card Number - Please enter 15-16 digits"; //specific error message in the placeholder
      fieldsetValidity = false;


    }
    if (fieldsetValidity === false) { // MT- error case
      throw "Please complete the indicated issues";
    } else { // MT- succes case, removes error message
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }

}



function validateCVV() { //MT- Regular expression for amount of digits in CVV
  var cvvElement = document.getElementsByName("cvc")[0];
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;

  //MT- Validation to see if the cvv number is 3 or 4 digits
  try {
    if (/^[0-9]{3,4}$/i.test(cvvElement.value)) {
        cvvElement.style.outline = "";


    } else {//MT- error case
      cvvElement.style.background = "rgb(255, 100, 100)";
      cvvElement.style.outline = "1px solid red";
      cvvElement.placeholder = "CVV - Please enter only 3-4 digits"; //specific error message in the placeholder
      fieldsetValidity = false;


    }
    if (fieldsetValidity === false) { // MT- error case
      throw "Please complete the indicated issues";
    } else { // MT- succes case, removes error message
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }

}

function confirmBox() {
  var confirmElem = document.getElementById("confirm");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;

  //MT- Validation to see if the box is checked or not
  try {
    if (confirmElem.checked) { //MT- succes case
        confirmElem.checked = ""; //MT- removes the check so they have to confirm again that their data is correct

    } else {//MT- error case
      confirmElem.style.outline = "1px solid red";
      fieldsetValidity = false;


    }
    if (fieldsetValidity === false) { // MT- error case
      throw "Please complete the indicated issues";
    } else { // MT- succes case, removes error message
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
  } else {
    evt.returnValue = false;
  }
  formValidity = true;

  inputs();
  select();
  cardType();
  confirmBox();
  validateCVV();
  validateCardNum();

  if (formValidity === true) { //GOM ~ form is valid
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  }
  else { // GOM ~ gets the page to go to the top when error occurs
    scroll(0,0);
  }
}


//MT- creates event listeners for functions you dont necissarily want to work as soon as the page loads
function createEventListeners() {
  var submit = document.getElementsByTagName("form")[0];
  if (submit.addEventListener) {
    submit.addEventListener("submit", validateForm, false);
  } else if (submit.attachEvent) {
    submit.attachEvent("onsubmit", validateForm);
  }
}

// GOM ~ functions will carry out as soon as the page loads  //MT- function that allows to take call multiple functions
function setUpPage() {
  createEventListeners();
  removeSelectDefaults();
}

//MT- event listerners for when the page loads, that trigger setUpPage
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
