/**
 * @copyright 2019 Sam Price
 * @description A Bacon Cipher
 */

const cipher = ['AAAAA','AAAAB','AAABA','AAABB','AABAA','AABAB','AABBA','AABBB','ABAAA','ABAAB','ABABA','ABABB','ABBAA','ABBAB','ABBBA','ABBBB','BAAAA','BAAAB','BAABA','BAABB','BABAA','BABAB','BABBA','BABBB','BBAAA','BBAAB'];
const orig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function encode(text = '') {
  const final = [];
  const split = text.split('');
  for (let i = 0; i < split.length; i++) {
    const char = split[i].toUpperCase();
    if (orig.includes(char)) {
      const index = orig.indexOf(char);
      final.push(cipher[index]);
    } else {
      final.push(char);
    }
  }
  return final.join('');
}

function decode(text = '', isTitleCase = true) {
  const final = [];
  const split = text.split('');
  let charGroup = [];
  for (let i = 0; i < split.length; i++) {
    const char = split[i].toUpperCase();
    if (/[AB]/.test(char)) {
      if (charGroup.length === 4) {
        charGroup.push(char)
        const index = cipher.indexOf(charGroup.join(''));
        final.push(orig[index]);
        charGroup = [];
      } else {
        charGroup.push(char);
      }
    } else {
      final.push(char);
    }
  }
  return isTitleCase ? titleCase(final.join('')) : final.join('');
}

function titleCase(str = '') {
  return str.toLowerCase().split(' ').map(word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }).join(' ');
}

const version = require('./package.json').version;

module.exports = {
  encode,
  decode,
  version
}