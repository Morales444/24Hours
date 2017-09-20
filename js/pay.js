/*

    Form Validation
    Authors: Marco and Gisselle
    Date: 9.20.17

    file: pay.js

*/
"use strict";


function setUpPage() {
  createEventListeners();
  removeSelectDefaults();
}

function removeSelectDefaults() {

}

function validateForm(submitevt) {
  if (submitevt.preventDefault) {
    submitevt.preventDefault();
  }
  else {
    submitevt.returnValue = false;
  }
  formValidity = true;

  validateRequired();



  //validity tests will go here
  if (formValidity === true) {//form is valid
     document.getElementById("errorText").innerHTML = "";
     document.getElementById("errorText").style.display = "none";
     document.getElementsByTagName("form")[0].submit();
  }
  else {//form not valid
    document.getElementById("errorText").innerHTML = "Please fix the indicated problems."; //message for the error div
    document.getElementById("errorText").style.display = "block"; //it turns the div visible
    scroll(0,0) // scrolls you back up to the page so you see the div

  }
alert("in validateForm");
}

function createEventListeners() {
  var submitForm = document.getElementsByTagName("form")[0];
  if (submitForm.addEventListener) {
    submitForm.addEventListener("submit", validateForm , false)
  }
  else if (submitForm.attachEvent) {
      submit.attachEvent("onsubmit", validateForm)

          }


  alert("in createEventListeners");
}









if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
