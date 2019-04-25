function isFinitePositiveNumber(value){
  return isFinite(value) && value > 0;
}

function isTriangleValidName(str) {
  return str.length === 3 && str.match(/[a-z]/i);
}

export  {isFinitePositiveNumber, isTriangleValidName};