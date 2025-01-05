const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  for (let domain of domains) {
    let domainName = "";
    const domainParts = domain.split(".").reverse();
    for (let part of domainParts) {
      domainName += `.${part}`;
      if (dns[domainName]) {
        dns[domainName]++;
      } else {
        dns[domainName] = 1;
      }
    }    
  }
  return dns;
}

module.exports = {
  getDNSStats
};
