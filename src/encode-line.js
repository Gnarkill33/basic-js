const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return "";

  let finalString = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        finalString += `${count}${str[i - 1]}`;
      } else {
        finalString += str[i - 1];
      }
      count = 1;
    }
  }

  if (count > 1) {
    finalString += `${count}${str[str.length - 1]}`;
  } else {
    finalString += str[str.length - 1];
    }
    
  return finalString;
}

module.exports = {
  encodeLine
};
