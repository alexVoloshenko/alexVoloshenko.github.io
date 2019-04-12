const functions = {
  checkTriangle: function (data) {
    return ((data.firstSide < data.secondSide + data.thirdSide &&
    data.secondSide < data.firstSide + data.thirdSide &&
    data.thirdSide < data.firstSide + data.secondSide));
  },

  suqares: function (data) {
    const p = (data.firstSide + data.secondSide + data.thirdSide) / 2;

    return Math.sqrt(p * (p - data.firstSide) * (p - data.secondSide) * (p - data.thirdSide));
  },

  compareTriangles: function (triangle1, triangle2) {
    return triangle1.square - triangle2.square;
  }
};

export default functions;