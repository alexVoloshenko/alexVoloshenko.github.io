import {isStringOfNumbers} from './validate.js';
import {palindromeExtraction} from './functions.js';

let palindrome;
let inputNumber = document.forms["task4-form"].elements["number"];
let errorField = document.getElementsByClassName("task4-error")[0];
let resultField = document.getElementsByClassName("result--palindrome")[0];

inputNumber.addEventListener('keyup', (event) => {
  resultField.textContent = "";
  if (isStringOfNumbers(event.target.value) && event.target.value > 10) {
    palindrome = event.target.value;
    errorField.textContent = "";
  } else {
    palindrome = null;
    generateError(errorField);
  }
});

function findPalindrome() {
  console.log(palindrome);
  let palindromsArray = palindromeExtraction(palindrome);
  if (palindromsArray.length === 0) {

    return errorField.textContent = "This number doesnt exist any palindrome";
  }
  console.log(palindromsArray);
  if (palindrome && palindromsArray.length === 1) {

    resultField.textContent = `Max palindrome: ${palindromsArray[0]}`;
  } else if (palindromsArray.length > 1) {
    resultField.textContent = `Max palindrome: ${palindromsArray[0]}\n
    Other palindroms:\n ${palindromsArray.slice(1)} \n Palindroms count: ${palindromsArray.length}`;
  } else {
    generateError(errorField);
  }
}

function generateError(field) {
  return field.textContent = "You can input only positive integer numbers grater than 10";
}

function showResult(field, result) {
  return field.textContent = "";
}

export default findPalindrome;