/*

    Form Validation
    Authors: Marco and Gisselle
    Date: 9.20.17

    file: pay.js

*/

/*
   Start of Gisselle's Section: Top of Payment Inforation
*/

/*
   End of Gisselle's Section: Top of Payment Inforation 
*/
function setUpPage() {
  removeSelectDefaults();
  createEventListeners();

}



/*=========================================================================//
Start-- Marco's Section: Payment Information, Bottom half of Payment Page
//========================================================================*/







/*=========================================================================//
General Code Section that will be used by evreyone
//========================================================================*/


function createEventListeners() {

}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
