const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayFromNumber = Array.from(String(n), Number);
  let maxNumber = Number([...arrayFromNumber.slice(1)].join(''));
  for (let i = 0; i < arrayFromNumber.length; i++) {
    const noNumberArray = [...arrayFromNumber.slice(0, i), ...arrayFromNumber.slice(i + 1)];
    const currentNumber = Number(noNumberArray.join(''));
    maxNumber = Math.max(maxNumber, currentNumber);
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
