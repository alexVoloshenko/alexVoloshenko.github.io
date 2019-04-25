import {isPalindrome, palindromeExtraction} from '../functions.js';
import { isStringOfNumbers } from '../validate.js'

//test function isPalindrome
describe('is palindrome, check string of numbers grater than 10', function () {

  function makeTest(value) {
    it(`should return true if string of numbers ${value} is palindrome`, function () {
      chai.expect(isPalindrome(value)).to.equal(true);
    });
  }
  let testData = ["11", "2552", "121", "955559", "11111111"];
  testData.forEach((item) => {
    makeTest(item);
  })
});


describe('is not palindrome, check string of numbers grater than 10', function () {
  function makeTest(value) {
    it(`should return false if string of numbers ${value} is not palindrome`, function () {
      chai.expect(isPalindrome(value)).to.equal(false);
    });
  }
  let testData = ["12", "10", "123123", "12345678910", "098745"];
  testData.forEach((item) => {
    makeTest(item);
  })
});

//test function palindromeExtraction
describe('check palindrome extraction from string of numbers', function () {
  function makeTest(value) {

    let ecpected = function(element) {
      return isPalindrome(element);
    };

    it(`should return palindroms ${palindromeExtraction(value)} from ${value}`, function () {

     let palindromsArray =  palindromeExtraction(value);
     let success = palindromsArray.every(ecpected);
      chai.expect(success).to.equal(true);
    });
  }
  let testData = ["1111", "22", "4444", "123544465875546", "00988954655745"];

  testData.forEach((item) => {
    makeTest(item);
  })
});

//test function validate
describe('check if string contain only numbers', function () {

  function makeTest(value) {
    it(`should return true if string ${value} contains only positive numbers`, function () {
      chai.expect(isStringOfNumbers(value)[0]).to.equal(value);
    });
  }
  let testData = ["0", "012546", "8546", "11", "95846555444"];
  testData.forEach((item) => {
    makeTest(item);
  })
});


