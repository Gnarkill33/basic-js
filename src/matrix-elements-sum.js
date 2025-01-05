const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let total = 0;
  let columnsNumber = matrix[0].length;
  
  for (let i = 0; i < columnsNumber; i++) {
    let zeroFound = false;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        zeroFound = true;
      } else if (zeroFound) {
        continue;
      } else {
        total += matrix[j][i];
      }
    } 
  }
  return total;
}

module.exports = {
  getMatrixElementsSum
};
