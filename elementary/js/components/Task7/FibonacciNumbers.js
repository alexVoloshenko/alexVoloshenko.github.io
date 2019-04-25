


function FibonacciNumbers(){
  function fibonacchi(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }

    return fibonacchi(n - 2) + fibonacchi(n - 1);
  }

  this.findFibo = function(data){
    let error = {
      status: false,
      reason: ''
    };
    let start;
    let result = [];
    let min = Number(data.min);
    let max = Number(data.max);
    let length = Number(data.len);
    let numbers  = {min, max, length};

    // for (let prop in data) {
    //   if (!Number.isInteger(numbers[prop]) || numbers[prop] < 0) {
    //     error.reason = 'Use only positive integer numbers!';
    //     return error;
    //   }
    // }

    if (numbers.length) {
      for (let k = 0; k < numbers.length; k++) {
        result.push(fibonacchi(k));
      }
      return result;
    }

    for (let j = 2; fibonacchi(j) <= numbers.min; j++) {
      start = fibonacchi(j + 1);
    }

    for (let i = j; fibonacchi(i) < numbers.max; i++) {
      result.push(fibonacchi(i));
    }
    return result;
    console.log(result);
  }
}

function createFibo() {
  let contextNumbers = {
    min: 1,
    max: 100
  };
  let newFibo = new FibonacciNumbers();

  return newFibo.findFibo(contextNumbers);
}


export default createFibo;







