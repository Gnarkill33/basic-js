const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;

  const arr1 = [...s1];
  const arr2 = [...s2];
  let count;
  let totalCount = 0;
  let map = new Map();

    for (let i = 0; i < arr1.length; i++) {
      const currentItem = arr1[i];
      if (arr2.includes(currentItem)) {
        if (map.has(currentItem)) {
          count = map.get(currentItem);
          let newCount = count + 1;
          map.set(currentItem, newCount);
        } else {
          map.set(currentItem, 1);
        }
        
        const currentItemIndex = arr2.indexOf(currentItem);
        arr2.splice(currentItemIndex, 1);
      }  
    }
  
  for (let value of map.values()) {
    totalCount += value;
  }
  
  return totalCount;
}

module.exports = {
  getCommonCharacterCount
};
