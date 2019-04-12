import React, {Component} from 'react';
import functions from './functions';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      triangle: {},
      triangles: [],
      isValidInputs: false

    };
  }

  showResult = () => {
    let res = this.state.triangles.sort(functions.compareTriangles);
    console.log(res);
  };

  addTriangle = () => {
    if (this.state.isValidInputs && this.isTriangleValidName(this.state.triangle.triangleName)) {
      const triangle = this.state.triangle;
      if (functions.checkTriangle(triangle)) {
        this.setState({
          triangles: [...this.state.triangles, {
            name: this.state.triangle.triangleName,
            square: functions.suqares(triangle)
          }]
        }, this.showResult);

      } else {
        console.log("this triangle does not exist");
      }
    } else {
      console.log("please enter valid values");
    }
  };

  onNameChange = (event) => {
    const triangleName = event.target.value;
    if (this.isTriangleValidName(triangleName)) {
      this.setState({
        triangle: {
          ...this.state.triangle,
          triangleName: event.target.value
        }
      });
    }
  };

  onSideChange = (event) => {
    const triangleSide = event.target.name;
    if (this.isTriangleValidSide(event.target.value)) {
      this.setState({
        triangle: {
          ...this.state.triangle,
          [triangleSide]: parseInt(event.target.value)
        }
      });
      this.setState({isValidInputs: true});
    } else {
      this.setState({isValidInputs: false});
    }
  };

  isTriangleValidName = (str) => {
    return str.length === 3 && str.match(/[a-z]/i);
  };

  isTriangleValidSide = (num) => {
    return isFinite(num);
  };


  render() {

    return (
      <div className="task3-container">
        <span>3 letters - triangle name</span>
        <input type="text"
               className="triangle-name"
               placeholder="Triangle name"
               onChange={this.onNameChange}/>
        <span>sides - only numbers</span>
        <input type="text"
               name="firstSide"
               className="triangle-side"
               placeholder="Triangle side A"
               onChange={this.onSideChange}/>
        <input type="text"
               name="secondSide"
               className="triangle-side"
               placeholder="Triangle side B"
               onChange={this.onSideChange}/>
        <input type="text"
               name="thirdSide"
               className="triangle-side"
               placeholder="Triangle side C"
               onChange={this.onSideChange}/>
        <input className="sendTriangle"
               type="button"
               value="Add"
               onClick={this.addTriangle}/>
      </div>
    );
  }
};


