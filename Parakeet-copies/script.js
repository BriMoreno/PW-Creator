// Assignment code here
//arrays to chose characters for the password
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const validNum = [0,1,2,3,4,5,6,7,8,9];
const validSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|"];

//Prompts asked user to see what they want
var chara = prompt("How many characters would you like in your password?");
var specChara = prompt("Would you like any special characters in your password?(Y/N)");
var caseU = prompt("Would you like uppercase letters?(Y/N)");
var caseL = prompt("Would you like lowercase letters?(Y/N)");
var numbers = prompt("Would you like numbers as well?(Y/N)");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generate is the button

function selectSpecChara() {
  
}
function generatePassword() {


}
// Write password to the #password input
function writePassword() {
 var password = generatePassword(); //define this function generate Password
 var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //make the generateBtn function
