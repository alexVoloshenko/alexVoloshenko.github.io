import isStringOfNumbers from './validate.js';


function findPalindrome(event){
  let inputNumber = document.forms["task4-form"].elements["number"];
  let val = inputNumber.value;
  if(isStringOfNumbers(val)) {

  }
  console.log(isStringOfNumbers(val));



}
export default findPalindrome;