import findPalindrome from './components/Task1/FindPalindrome.js'
import menuAnimation from './view/view.js'

menuAnimation();
//showPalindrome();

let button = document.querySelectorAll('.button');
console.log(button);

// function functionTaskName() {
//   console.log('functionTaskName');
// }

function runFunction(event) {
  event.preventDefault();
  let functionTaskName = event.target.dataset.functionName;

  //console.log(functionTaskName);
  switch (functionTaskName) {
    case 'findPalindrome' : findPalindrome(event);
      break;
  }
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', runFunction);
}



