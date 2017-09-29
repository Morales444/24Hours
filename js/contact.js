/*
    Project_01_06_02
    Mason Roberts
    contact.js
*/
"use strict";
//start validation
var formValidity = true;

function validateTextArea() {
    var textarea = document.querySelector("textarea");
    var fieldsetValidity;
    var errorMsg = document.getElementById("errorText");
    try {
        if (textarea.value === "") {
            textarea.style.background = "rgb(255, 100, 100)";
            fieldsetValidity = false;
        } else {
            textarea.style.background = "";
        }
        if (fieldsetValidity === false) {
            formValidity = false;
            throw "Please complete all fields"
        }
    } catch (msg) {
        errorMsg.innerHTML = msg
        errorMsg.style.display = "block";
    }
}

function validateFields() {
    var fields = document.querySelectorAll("input");
    var errorMsg = document.querySelector("div");
    var fieldsetValidity;
    var numElem = fields.length;
    var currentElem;
    try {
        for (var i = 0; i < numElem - 1; i++) {
            if (fields[i].value === "") {
                fields[i].style.background = "rgb(255, 100, 100)";
                fieldsetValidity = false;
            } else {
                fields[i].style.background = "";
            }
        }
        if (fieldsetValidity === false) {
            formValidity = false;
            throw "Please complete all fields"
        }
    } catch (msg) {
        errorMsg.innerHTML = msg;
        errorMsg.style.display = "block";
    }
}

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); //stops the default sumbit=mason
    } else {
        evt.returnValue = false; //stops the form from submiting=mason
    }
    formValidity = true;
    validateFields();
    validateTextArea();
    //formValidity = true; =mason
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

function setupContact() { //seting up the event listeners =mason
    switchBackground();
    var submit = document.getElementsByClassName('submit')[0]; //get the submit button =mason
    if (submit.addEventListener) {
        submit.addEventListener("click", validateForm, false);
    } else if (submit.attachEvent) {
        submit.attachEvent("onclick", validateForm);
    }
}
//on load, get start all the event listeners =mason
if (window.addEventListener) {
    window.addEventListener("load", setupContact, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setupContact);
}

var backgroundArray = ["url('images/boy.jpg')", "url('images/city1.jpg')", "url('images/brick.jpg')", "url('images/watchback2.jpg')", "url('images/boy.jpg')"];
console.log(backgroundArray);
function switchBackground() {
    var i=0;
    setInterval(function () {
        i++;
        document.body.style.background = backgroundArray[i];
        if(i === 4){
            i = 0;
        }
    }, 1000)
}

