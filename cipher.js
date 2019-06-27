/**
 * @copyright 2019 Sam Price
 * @description A Bacon Cipher
 */


const { cipher, orig } = require('./dict');

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

function decode(text = '', titleCase = true) {
  const final = [];
  const split = text.split('');
  let charGroup = [];
  for (let i = 0; i < split.length; i++) {
    const char = split[i].toUpperCase();
    if (char == 'A' || char == 'B') {
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
  return titleCase ? titleCase(final.join('')) : final.join('');
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