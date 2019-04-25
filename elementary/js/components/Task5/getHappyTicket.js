'use strict';


function LuckyTickets() {

  function separateNumber(number) {
    let stringNumber = number.toString();
    let firstPart, secondPart;

    if (stringNumber.length > 3) {
      firstPart = stringNumber.slice(0, stringNumber.length - 3);
      secondPart = stringNumber.slice(stringNumber.length - 3, stringNumber.length);
    } else {
      firstPart = 0;
      secondPart = number;
    }

    return [+firstPart, +secondPart];
  }

  function sumArray(num) {
    let arr = num.toString().split('');
    let result = 0;
    arr.forEach(function (value) {
      result += parseInt(value);
    });
    return result;
  }

  this.validateTickets = function (context) {
    let error = {
      status: false,
      reason: ''
    };

    let numbers = {};
    let min = Number(context.min);
    let max = Number(context.max);

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      error.reason = 'You can use only positive integer numbers!';

      return error;
    } else if (context.min.length > 6 || context.max.length > 6) {
      error.reason = 'You can use only numbers from 0 to 999999!';

      return error;
    }
    numbers = {min, max};

    return numbers;
  };

  this.getHappyTicketsEasyMethod = function (data) {
    let result = 0;
    let counter = data.min;
    //let string = data.min.toString();
    let temp = 0;

    let firstNumberPart1 = separateNumber(data.min)[0],
      firstNumberPart2 = separateNumber(data.min)[1],
      secondNumberPart1 = separateNumber(data.max)[0];

    for (let i = firstNumberPart1; i <= secondNumberPart1; i++) {
      temp = sumArray(i);
      for (let j = firstNumberPart2; j < 1000; j++) {
        if (temp === sumArray(j)) {
          result++;
        }
        if (counter === data.max) {
          return result;
        }
        counter++;
      }
    }
    return result;
  };

  this.getHappyTicketsComplexMethod = function (data) {
    let counter = 0;
    let arr;
    for (let i = data.min; i <= data.max; i++) {
      let even = 0, odd = 0;
      arr = i.toString().split('');
      for (let j = 0; j < arr.length; j++) {
        if (j % 2 === 0) {
          even = even + +arr[j];
        } else {
          odd = odd + +arr[j];
        }
      }
      if (even === odd) {
        counter++;
      }
    }

    return counter;
  }
}

function checkTickets(context) {
  let luckyTicket = new LuckyTickets;
  let checkTickets = luckyTicket.validateTickets(context);
  if (checkTickets.reason) {
    return checkTickets.reason;
  }

  return 'Easy method: ' + luckyTicket.getHappyTicketsEasyMethod(checkTickets) + '\n' +
    'Complex method: ' + luckyTicket.getHappyTicketsComplexMethod(checkTickets);
}

export default checkTickets;











