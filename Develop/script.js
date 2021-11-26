// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

// prompt asking for number of characters
let result
let uppercase
let lowercase
let numbersPromptAnswer
let specialChar

function passwordLength() {
result = Number(window.prompt("Type the number of characters you wish your password to be", ""));
}

passwordLength()
function special() {
  specialChar = window.prompt('would you like special characters? y/n')
  console.log(specialChar)
}
special()
function numbers() {
  numbersPromptAnswer = window.prompt('would you like numbers? y/n')
}
numbers()
function capital() {
  uppercase = window.prompt('capital letters? y/n')
}
capital()

// function writePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%"
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  let numbersChars  = "1234567890"
  let specialChars = "!@#$%"
    
  let password = ""

  for (var i = 1; i <= result; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // password - JIOUSD(^#@@#)
  if (specialChar === "y") {
    password.replace(, specialChars)
   }

  
  // if (specialChar === "y") {
  //   passwordLength
  // }
  return password
}
// Write password to the #password input
generateBtn.addEventListener("click", writePassword);


// // Add event listener to generate button
// prompt for options
// give validation of inputs
// generate baised on answer
// display password
