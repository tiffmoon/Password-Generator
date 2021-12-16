// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  passwordLength = parseInt(prompt("How many characters? Must be between 8-128 characters"));
  // If invalid entry, prompt to enter a valid number
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid entry, enter a number between 8-128");
  }
  
  const password = [] // Final Password


  var characterPool = [] // Possible characters to make up password

  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
  var lowercaseChoice = confirm("Would you like to include lowercase characters?")

    if (lowercaseChoice === true) {
      characterPool.push(lowerCase); // Adding lowercase characters to pool if selected
      password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]); // Ensures password has at least one lowercase character (if selected)
      passwordLength--; // Decrement to accomodate for adding character in above line
    }
  

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var uppercaseChoice = confirm("Would you like to include uppercase characters?")

    if (uppercaseChoice === true) {
      characterPool.push(upperCase);
      password.push(upperCase[Math.floor(Math.random() * upperCase.length)]); // Ensures password has at least one uppercase character (if selected)
      passwordLength--; // Decrement to accomodate for adding character in above line
    }
  
  var numeric = "0123456789".split("")
  var numericChoice = confirm("Would you like to include numeric characters?")

    if (numericChoice === true) {
      characterPool.push(numeric);
      password.push(numeric[Math.floor(Math.random() * numeric.length)]); // Ensures password has at least one numeric character (if selected)
      passwordLength--; // Decrement to accomodate for adding character in above line
    }
  
  var special = "!@#$%^&*".split("")
  var specialChoice = confirm("Would you like to include special charcters?")

    if (specialChoice === true) {
      characterPool.push(special);
      password.push(special[Math.floor(Math.random() * special.length)]); // Ensures password has at least one special character (if selected)
      passwordLength--; // Decrement to accomodate for adding character in above line
    }

// Flatten characterPool array - no more nested arrays:
  var characterpoolFlat = Array.prototype.concat.apply([], characterPool); 
  
//  Randomly adds as many characters to the password as selected by passwordLength 
    for (i=0; i < passwordLength; i++) {
      var character = characterpoolFlat[Math.floor(Math.random() * characterpoolFlat.length)];
      password.push(character);
    }

  return password.join(''); // Joins array ! Password complete !!
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
