// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

// prompt asking for number of characters
function passwordLength() {
  result = Number(window.prompt("Type the number of characters you wish your password to be", ""));
  }
  passwordLength()
// function writePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%"

  // let password = ""

  for (var i = 1; i <= result; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}
  return password
}
// Write password to the #password input
generateBtn.addEventListener("click", writePassword);


// // Add event listener to generate button
// prompt for options
// give validation of inputs
// generate baised on answer
// display password
