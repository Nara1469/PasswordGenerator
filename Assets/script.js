// Declare character types of array
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&*+-.:;=?@^_|~";
//const symbols = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";  

// Assignment Code
var length;
var characters;
var generateBtn = document.querySelector("#generate");

// Write password 
function writePassword() {
  var password = "";
  var choice = true;
  var start = false;
  var passwordText = document.querySelector("#password");

  characters = "";
  length = 0;
  // Asking password length (supposed to be between 8-128 characters long)
  length = window.prompt("Enter password length:");
  if ((length >= 8) && (length <= 128)) {
    start = true;
    // Asking character types can be selected
    choice = window.confirm("Does this password include lowercase?");
    if (choice) {
      characters += lowerCase;
    } 
    choice = window.confirm("Does this password include uppercase?");
    if (choice) {
      characters += upperCase;
    } 
    choice = window.confirm("Does this password include numbers?");
    if (choice) {
      characters += numbers;
    } 
    choice = window.confirm("Does this password include special characters?");
    if (choice) {
      characters += symbols;
    } 
    if (characters === "") {
      window.alert("Wrong choice! (at least one character type should be selected)");
      start = false;
    }
  } else {
    window.alert("Wrong number! (at least 8 characters and no more than 128 characters)");
    start = false;
  }

// Checking I got right inputs
  if (start) {
    // Write password to the #password input
    password = generatePassword(length, characters);
    passwordText.value = password;
  } else {
    window.alert("Start over");
  }
}

// Create a new password
function generatePassword(length, characters) {
  var password = "";
  var i;
  for (i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
