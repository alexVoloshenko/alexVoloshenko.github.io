import {isFinitePositiveNumber, isTriangleValidName} from './validate.js';
import {checkTriangle, square, compareTriangles} from './functions.js';

let triangleInputName = document.getElementsByClassName("triangle-name")[0];
let triangleSides = document.getElementsByClassName("triangle-side");
let errorField = document.getElementsByClassName("task3-error")[0];
let resultField = document.getElementsByClassName("result-triangle")[0];
let addTriangleButton = document.getElementsByClassName("add-triangle")[0];
let trianglesArray = [];
let sidesArray = [];
let counterOfTriangles = 0;

addTriangleButton.addEventListener("click", (event) => {
  event.preventDefault();

  let triangleName = triangleInputName.value;
  if(!isTriangleValidName(triangleName)){
    return  errorField.textContent = "Name is not valid, please choose 3 latin letters";
  }

  for (let i = 0; i < triangleSides.length; i++) {
    if (isFinitePositiveNumber(triangleSides[i].value)) {
      sidesArray.push(+triangleSides[i].value);
      errorField.textContent = "";
    } else {
      errorField.textContent = "Not all sides are positive numbers";
      return;
    }
  }

  if (sidesArray.length === 3 && checkTriangle(sidesArray)) {
    let triangleSquare = square(sidesArray);
    trianglesArray.push({
      name: triangleName,
      square: triangleSquare.toFixed(4)
    });
    counterOfTriangles++;
    document.getElementsByClassName("count-of-triangles")[0].textContent =
      `${counterOfTriangles} triangles added`;
    sidesArray = [];
  } else {
    errorField.textContent = "This triangle does not exist, please choose another sides";
    sidesArray = [];
  }
});

function sortTriangles() {
  if (trianglesArray.length > 1) {
    let result = trianglesArray.sort(compareTriangles);
    let resultString = "";
    result.forEach((item) => {
      resultString += `${item.name} : ${item.square} \n`;
    });
    resultField.textContent = resultString;
  } else {
    errorField.textContent = "Need minimum 3 rectangles for compare";
  }
}

export default sortTriangles;