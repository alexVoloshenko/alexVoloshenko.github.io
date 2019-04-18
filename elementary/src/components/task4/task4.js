import React, {Component} from 'react';
import functions from './functions';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      palindrome: ''
    };
  }

  showResult = () => {
    if(this.state.palindrome !== null) {
      console.log(functions.palindromeExtraction(this.state.palindrome));
    }
  };

  onInputChange = (event) => {
    if (this.isPalindromeValid(event.target.value)){
      this.setState({palindrome: event.target.value});
    }else{
      console.log("please input only positive ineger numbers");
      this.setState({palindrome: null});
    }
  };


  isPalindromeValid = (str) => {
    return str.match(/^\d+$/);
  };

  render() {

    return (
      <div className="task3-container">
        <span>Palindrome</span>
        <input type="text"
               className="triangle-name"
               placeholder="input palindrome"
               onChange={this.onInputChange}/>
        <input className="sendTriangle"
               type="button"
               value="Check"
               onClick={this.showResult}/>
      </div>
    );
  }
};


