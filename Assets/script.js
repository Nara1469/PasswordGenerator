var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&*+-.:;=?@^_|~";
//const symbols = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";  

// Assignment Code
var length = 8;
var characters = "";
var choice = true;
var start = false;
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters) {
  var password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
 
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  length = window.prompt("Enter password length:");
  if ((length >= 8) && (length <= 128)) {
    start = true;
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
      window.alert("Wrong choice!");
      start = false;
    }
  } else {
    window.alert("Wrong number!");
    start = false;
  }

  if (start) {
    // Write password to the #password input
    password = generatePassword(length, characters);
    passwordText.value = password;
  } else {
    window.alert("Start over");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
