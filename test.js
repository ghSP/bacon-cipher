const cipher = require('.');
const TEXT = 'Testing words work!';
const ENCODED = cipher.encode(TEXT);
const DECODED_CAPS = cipher.decode(ENCODED, false);
const DECODED_TITLE = cipher.decode(ENCODED);
if (ENCODED !== 'BAABBAABAABAABABAABBABAAAABBABAABBA BABBAABBBABAAABAAABBBAABA BABBAABBBABAAABABABA!') {
  console.error('Encoding not working!');
  console.log(ENCODED);
  process.exit(1);
}
console.log('Encoding working!');
if (DECODED_CAPS !== 'TESTING WORDS WORK!') {
  console.error('Decoding (CAPS) not working!');
  console.log(DECODED_CAPS);
  process.exit(1);
}
console.log('Decoding (CAPS) working!');
if (DECODED_TITLE !== 'Testing Words Work!') {
  console.error('Decoding (TITLE) not working!');
  console.log(DECODED_TITLE);
  process.exit(1);
}
console.log('Decoding (TITLE) working!')
