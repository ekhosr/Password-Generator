// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//my code starts here

//Declaring vaiable for password length
var passwordLength = 0;

//keep asking user for password length until user enter a NUMBER between 8 to 128 
 while (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength) ) {
  passwordLength = window.prompt("Please Enter a <Number> between 8 to 128 for Your Password Length:");
  console.log(passwordLength);
 };

 //Check to see if user wants numeric characters in her/his password
var askNumeric = window.confirm("Do You Want Numeric Characters in Your Password?");
console.log(askNumeric);


 //Check to see if user wants Upper Case characters in her/his password
 var askUpper = window.confirm("Do You Want Upper Case Characters in Your Password?");
 console.log(askUpper);

 //Check to see if user wants Lower Case characters in her/his password
 var askLower = window.confirm("Do You Want Lower Case Characters in Your Password?");
 console.log(askLower);

 //Check to see if user wants Special characters in her/his password
  var askSpecial = window.confirm("Do You Want Special Characters in Your Password?");
  console.log(askSpecial);

if (askNumeric == false && askLower == false && askUpper == false && askSpecial == false) {
  alert("You Should at lease choose a numeric, Upper Case, Lower Case or Special Character ");
  
};

var numric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];




