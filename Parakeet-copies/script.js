// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generate is the button
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //make the generateBtn function

//arrays to chose characters for the password
const alphabetL = ["abcdefghijklmnopqrstuvwxyz".split("")];
const alphabetU = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
const validNum = [0,1,2,3,4,5,6,7,8,9];
const validSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|"];


function generatePassword() {
//Prompts asked user to see what they want
    var charaSet = [];
    var createPw = "";
    let chara =window.prompt("How many characters would you like in your password?");
    let specChara = window.confirm("Would you like any special characters in your password?(Y/N)");
    let caseU = window.confirm("Would you like uppercase letters?(Y/N)");
    let caseL = window.confirm("Would you like lowercase letters?(Y/N)");
    let numbers = window.confirm("Would you like numbers as well?(Y/N)");
    var length = chara;
    console.log(length);
    //double checks valid user inputs
    if (chara < 8 || chara > 128) {
        return("Please enter a number in the range of 8 to 128 for character length.");
    } else {
        console.log(chara);
    }
        //this checks if any confirms all confirms were denied
        if (specChara === false && caseU === false && caseL === false && numbers === false) {
            return"Please enter at least 1 type of character to be in your password";
        }
            if (specChara === true || caseU === true || numbers === true || caseL === true) {
            if (specChara) {
                charaSet = charaSet.concat(validSymbols); //makes new array if they selected they want symbols.
                console.log(charaSet);
            }
            if (caseU) {
                charaSet = charaSet.concat(alphabetU); //Adds to the new array
                console.log(charaSet);
            }
            if (caseL) {
                charaSet = charaSet.concat(alphabetL); //Adds to the new array
                console.log(charaSet);
            }
            if (numbers) {
                charaSet = charaSet.concat(validNum); //Adds to the new array
                console.log(charaSet);
            }
        }
    }

function writePassword() {
    var password = generatePassword(); //define this function generate Password
    var passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   
   };
   