const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return names;
  let namesRegister = new Map();
  let suffix;
  let nameChanged;
  
  names.forEach((name) => {
    if (namesRegister.has(name)) {
      suffix = namesRegister.get(name);
      nameChanged = `${name}(${suffix})`;
      while (namesRegister.has(nameChanged)) {
        nameChanged = `${name}(${suffix++})`;
        }
      namesRegister.set(nameChanged, suffix);
      } else {
        namesRegister.set(name, 1);
        }
  })
  const newNames = [...namesRegister.keys()];
  return newNames;
}

module.exports = {
  renameFiles
};
