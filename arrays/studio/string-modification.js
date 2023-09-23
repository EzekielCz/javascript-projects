
const input = require('readline-sync');

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//Use a template literal to print the original and modified string in a descriptive phrase.

let word = "LaunchCode";
let firstThreeEnd = word.slice(3) + word.slice(0,3);
console.log(`First three letters moved to the end : ${firstThreeEnd} \n`);


// //2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// //3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the erfi \\

let userInput = input.question("How many letters will be reloacted? : ");
if (Number(userInput) < word.length) {
    customEnd = word.slice(Number(userInput)) + word.slice(0, Number(userInput));
    console.log(customEnd);
} else {
    console.log("Invalid input. Input number is greater than the length of the string.")
};