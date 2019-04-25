import {checkTriangle, square, compareTriangles} from '../functions.js';



describe('is triangle exist', function () {

  function makeTest(value) {
    it(`should return true if triangle ${value} exist`, function () {
      chai.expect(checkTriangle(value)).to.equal(true);
    });
  }
  let testData = [[1,1,1], [2, 3, 4], [5, 5, 5], [23, 24 ,27]];
  testData.forEach((item) => {
    makeTest(item);
  })
});
describe('is triangle exist', function () {

  function makeTest(value) {
    it(`should return false if triangle ${value} doesnt exist`, function () {
      chai.expect(checkTriangle(value)).to.equal(false);
    });
  }
  let testData = [[0,0,0], [ 1, 1, 2], [1, 2, 3], [ -2, 0 , 500]];
  testData.forEach((item) => {
    makeTest(item);
  })
});

describe('is triangle exist', function () {

  function makeTest(value) {
    it(`should return number ${value} if 
the calculations were successful `, function () {
      chai.expect(square(value)).to.be.a('number');
    });
  }
  let testData = [23,44.33,15];
  testData.forEach((item) => {
    makeTest(item);
  })
});

