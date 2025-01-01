const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
  const arrCopy = [...arr];

  if (arrCopy.length === 0) return arrCopy;

  const newArr = [];

  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === '--double-next') {
      if ((i + 1) < arrCopy.length) {
      newArr.push(arrCopy[i + 1]);
      }
    } else if (arrCopy[i] === '--double-prev') {
      if (i > 0) {
      newArr.push(arrCopy[i - 1]);
      }
    } else if (arrCopy[i] === '--discard-prev' && arrCopy.length > 0) {
      newArr.pop();
    } else if (arrCopy[i] === '--discard-next') {
      if ((i + 1) < arrCopy.length) {
      i += 2;
      }
    } else {
      newArr.push(arrCopy[i]);
    } 
  }
  return newArr;
} 
}

module.exports = {
  transform
};
