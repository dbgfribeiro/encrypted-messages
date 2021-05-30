/*---------------Recebe mensagem escrita no input----------------*/

var getMessage = document.getElementById("getMessage");
var messageToEncrypt = "";

var writeScreen = document.querySelector(".write-container");
var chooseKey = document.querySelector(".choose-key");
var displayMessage = document.querySelector(".encrypted-message");

var displayBut = document.getElementById("display");
var backBut = document.getElementById("back");

getMessage.addEventListener("click", function () {
  var message = document.getElementById("message").value;
  if (message != "") {
    messageToEncrypt = message;
    console.log(messageToEncrypt);
    writeScreen.style.display = "none";
    chooseKey.style.display = "block";
    document.body.style.overflow = "visible";
  } else {
    messageToEncrypt = " ";
    console.log(messageToEncrypt, "please write your message");
    document.getElementById("error").style.opacity = 1;
  }
});

displayBut.addEventListener("click", function () {
  chooseKey.style.display = "none";
  displayMessage.style.display = "block";
  document.querySelector(".controls").style.display = "flex";
  document.body.style.overflow = "hidden";
});

backBut.addEventListener("click", function () {
  displayMessage.style.display = "none";
  writeScreen.style.display = "block";
  document.querySelector(".controls").style.display = "none";
});