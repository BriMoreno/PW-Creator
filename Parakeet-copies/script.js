//arrays to chose characters for the password
var alphabetL = ["abcdefghijklmnopqrstuvwxyz".split("")];
var alphabetU = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
var validNum = [0,1,2,3,4,5,6,7,8,9];
var validSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generate is the button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //make the generateBtn function

function generatePassword() {
//Prompts asked user to see what they want
   
    let chara =window.prompt("How many characters would you like in your password?");
    let specChara = window.confirm("Would you like any special characters in your password?(Y/N)");
    let caseU = window.confirm("Would you like uppercase letters?(Y/N)");
    let caseL = window.confirm("Would you like lowercase letters?(Y/N)");
    let numbers = window.confirm("Would you like numbers as well?(Y/N)");

    //double checks valid user inputs
    if (chara <= 8 && chara >= 128) {
        return"Please enter a value in the range of 8 to 128";
    }
    
    if (specChara === false && caseU === false && caseL === false && numbers === false) {
        return"Please enter at least 1 type of character to be in your password";
    }
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword(); //define this function generate Password
    var passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   
   }
   