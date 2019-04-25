// let envelops = {
//   first: {
//     side1: 4,
//     side2: 6
//   },
//   second: {
//     side1: 2,
//     side2: 2
//   }
// };
// function Envelopes() {
//   let envelopes = {};
//   this.validateEnvelopes = function (data) {
//     envelopes.first = {
//       side1: Number(data.height1),
//       side2: Number(data.width1)
//     };
//     envelopes.second = {
//       side1: Number(data.height2),
//       side2: Number(data.width2)
//     };
//     let firstRect, secondRect;
//     if (envelopes.first.side1 * envelopes.first.side2 >= envelopes.second.side1 * envelopes.second.side2) {
//       firstRect = 'first';
//       secondRect = 'second';
//     } else {
//       secondRect = 'first';
//       firstRect = 'second';
//     }
//
//     if (envelopes[firstRect].side1 > envelopes[secondRect].side1 &&
//       envelopes[firstRect].side2 > envelopes[secondRect].side2 ||
//       envelopes[firstRect].side1 > envelopes[secondRect].side2 &&
//       envelopes[firstRect].side2 > envelopes[secondRect].side1) {
//
//       return secondRect;
//     }
//     return 0;
//   }
// }
//
//
// function useFormula(a, b, p, q) {
//   let status = (p <= a && q <= b) || (p > a &&
//     b >= (2 * p * q * a + (p * p - q * q) * Math.sqrt(p * p + q * q - a * a)) / (p * p + q * q));
//   return status;
// }
//
// function compareEnvelopes(data){
//   let newEnvelopes = new Envelopes();
//
//   console.log(newEnvelopes.validateEnvelopes(data));
// }
//
// export default {compareEnvelopes,envelops} ;
//
