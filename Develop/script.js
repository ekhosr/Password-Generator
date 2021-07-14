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


//keep asking user for password length until user enter a NUMBER between 8 to 128 
while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  var passwordLength = window.prompt("Please Enter a <Number> between 8 to 128 for Your Password Length:");
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

//Declaring the password charactrers
var numric = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+-=[]\;',./{}|:<>?";

//functin to generate password
function generatePassword() {

  //Declare a container to put the characters which returned True from if statements  
   var passwordContainer = '';
  
  //checks the if statement for numeric characters, if returns true, it adds numeric characters to the container
  if (askNumeric == true) {
    passwordContainer = passwordContainer + numric;
    console.log(passwordContainer);

  };

  //checks the if statement for upper case characters, if returns true, it adds upper case characters to the container
  if (askUpper == true) {
    passwordContainer = passwordContainer + upperCase;
    console.log(passwordContainer);
  };

  //checks the if statement for lower case characters, if returns true, it adds lower case characters to the container
  if (askLower == true) {
    passwordContainer = passwordContainer + lowerCase;
    console.log(passwordContainer);
  };

  //checks the if statement for special characters, if returns true, it adds special  characters to the container
  if (askSpecial == true) {
    passwordContainer = passwordContainer + specialChar;
    console.log(passwordContainer);
  };
   
  //gets random characters from container and add it to results until the length is smaller than user choice for password length
  var passwordResult = '';
  for (i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * passwordContainer.length);
    passwordResult += passwordContainer[randomChar];
  }
   
  return passwordResult;
  console.log(passwordResult);


};
