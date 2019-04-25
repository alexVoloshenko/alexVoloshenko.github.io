
function checkTriangle(data) {
    return ((data[0] < data[1] + data[2]
    && data[1] < data[0] + data[2]
    && data[2] < data[0] + data[1]));
  }

function square(data) {
    const p = (data[0] + data[1] + data[2]) / 2;
    return Math.sqrt(p * (p - data[0]) * (p - data[1]) * (p - data[2]));
  }

function compareTriangles (triangle1, triangle2) {
    return triangle1.square - triangle2.square;
  }

export { checkTriangle, square, compareTriangles};