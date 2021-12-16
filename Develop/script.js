// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  passwordLength = parseInt(prompt("How long ? Must be between 8-128 character"));
  // If invalid entry, prompt to enter a valid number
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid entry, enter a number between 8-128");
  }
  
  const passwordP = [];
  var password = []
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var lowercaseChoice = confirm("Would you like to include lowercase letters?")
    if (lowercaseChoice === true) {
    password.push(lowerCase.split(''));
    }
  
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var uppercaseChoice = confirm("Would you like to include uppercase letters?")
    if (uppercaseChoice === true) {
      password.push(upperCase.split(''));
    }
  
  var numeric = "0123456789"
  var numericChoice = confirm("Would u like numeric characters?")
    if (numericChoice === true) {
      password.push(numeric.split(''));
    }
  
  var special = "!@#$%^&*"
  var specialChoice = confirm("Would u like special charcters?")
    if (specialChoice === true) {
      password.push(special.split(''));
    }

  // Now for passwordLength (number between 8-128) - for each one randomly assign one from spliced array password

  var newPassword = Array.prototype.concat.apply([], password);
  

// character randomly picks a character from the option 

// now we need to create a fucntion that strings together passwordLength as many 'characters'


 
  


  console.log(newPassword);
  console.log(character);


    for (i=0; i < passwordLength; i++) {
      var character = newPassword[Math.floor(Math.random() * newPassword.length)];
      passwordP.push(character);
    }


  return passwordP.join('');
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// alert?? - "How many character? slect a number bewteen 8-128"
// if >= 8 then log
// else if < 8 or > 128 then alert error.

// .randoom?


// function 

// rancomly generate ffe parts long
// then 
// .concat???
// .random
// .join - to join in array
// some far loops
// promt confimr
// alert
// 