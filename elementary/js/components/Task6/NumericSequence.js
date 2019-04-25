function NumericSequence() {

  this.validateData = function (data) {
    let error = {
      status: false,
      reason: ''
    };
    let length = Number(data.len);
    let min = Number(data.min);
    let numbers = {};
    if (!Number.isInteger(length) || !Number.isInteger(min)) {
      error.reason = 'You can use only positive integer numbers!';

      return error;
    }
    numbers = {length, min};

    return numbers;
  };

  this.getNumericSequence = function (data) {
    let number;
    let flag = false;
    let result = [];

    for (let i = 0; !flag; i++) {
      if (Number.isInteger(Math.sqrt(data.min + i))) {
        number = Math.sqrt(data.min + i);
        flag = true;
      }
    }

    for (let j = 0; result.length < data.length; j++) {
      result.push(number + j);
    }

    return result.join();
  }
}


function createNumericSequense(data) {
  console.log(data);
  let newSequense = new NumericSequence();
  let checkData = newSequense.validateData(data);

  if (checkData.reason) {
    return checkData.reason;
  }

  return newSequense.getNumericSequence(checkData);

}

export default createNumericSequense;