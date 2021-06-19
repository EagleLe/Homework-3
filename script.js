// Assignment Code
var upperCased = [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var lowerCased = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var numeric = [
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
var specialCharacters = [ 
'$', '#', '@', '!', '%', '^', '&', '*', '(', ')'
];

function getPasswordOptions () {
 var length = parseInt(prompt("how many character do you want?")
 );
  if (isNaN(length)=== true){ 
    alert('Provide passwords length');
    return;
};
  if (length < 8) {
    alert ('password must be more than 8 characters');
    return;
    };
  if (length > 128) {
    alert ('Password much be less than 128 characters');
    };
var hasUpperCased = confirm('Press ok for Upper Cased Characters');
var hasLowerCased = confirm('Press ok for Lower Cased Characters');
var hasSpecialCharacters = confirm('Press ok for special characters');
var hasNumeric = confirm('Press ok for numeric characters');

  if (
    hasUpperCased === false && 
    hasLowerCased === false && 
    hasSpecialCharacters === false && 
    hasNumeric === false
    ){
    alert ('Must select at least one');
    return;
    }
var passwordOptions = {
  length: length,
  hasUpperCased: hasUpperCased, 
  hasLowerCased: hasLowerCased, 
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumeric: hasNumeric,
  };
  return passwordOptions;
};

function getRandom(arr) {
var randIndex = Math.floor(Math.random() * arr.length);
var randElement = arr[randIndex];
return randElement;
}

function generatePassword () {
var options = getPasswordOptions();
var result = [];
var possibleCharacters = [];
var guaranteedCharacters = []; 

if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  guaranteedCharacters.push(getRandom(specialCharacters));
}
if (options.hasNumeric) {
  possibleCharacters = possibleCharacters.concat(numeric)
  guaranteedCharacters.push(getRandom(numeric));
}
if (options.hasLowerCased) {
  possibleCharacters = possibleCharacters.concat(lowerCased)
  guaranteedCharacters.push(getRandom(lowerCased));
}
if (options.hasUpperCased) {
  possibleCharacters = possibleCharacters.concat(upperCased)
  guaranteedCharacters.push(getRandom(upperCased));
}

for (var i=0; i<options.length; i++) {
  var possibleCharacters = getRandom(possibleCharacters);
  result.push(possibleCharacters);
  console.log(possibleCharacters);
}
for (var i=0; i<guaranteedCharacters.length; i++) {
  result[i]=guaranteedCharacters[i];
  result[options.length-i]=possibleCharacters[i];
}
return result.join ('');
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

