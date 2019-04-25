import findPalindrome from './components/Task4/FindPalindrome.js';
import sortTriangles from './components/Task3/SortTriangles.js';
import startChessBoard from './components/Task1/CreateChessBoard.js';
import {envelops, compareEnvelopes} from './components/Task2/CompareEnvelopes.js';
import checkTickets from './components/Task2/CompareEnvelopes.js';
import createNumericSequense from './components/Task6/NumericSequence.js';
import createFibo from './components/Task7/FibonacciNumbers.js';

import menuAnimation from './view/view.js'

menuAnimation();


let button = document.querySelectorAll('.button');




function runTaskFunction(event) {
  event.preventDefault();
  let functionTaskName = event.target.dataset.functionName;


  switch (functionTaskName) {
    case 'startChessBoard' : startChessBoard();
      break;
    case 'findPalindrome' : findPalindrome();
      break;
    case 'sortTriangles' : sortTriangles();
      break;
    case 'compareEnvelopes' : compareEnvelopes();
      break;
    case 'checkTickets' : checkTickets();
      break;
    case 'createNumericSequense' : createNumericSequense();
      break;
    case 'createFibo' : createFibo();
      break;
  }
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', runTaskFunction);
}



