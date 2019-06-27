const cipher = require('.');
const TEXT = 'Testing words work!';
const ENCODED = cipher.encode(TEXT);
const DECODED_CAPS = cipher.decode(ENCODED, false);
const DECODED_TITLE = cipher.decode(ENCODED);
if (ENCODED !== 'BAABBAABAABAABABAABBABAAAABBABAABBA BABBAABBBABAAABAAABBBAABA BABBAABBBABAAABABABA!') {
  console.error('Encoding not working!');
  process.exit(1);
}
console.log('Encoding working!');
if (DECODED_CAPS !== 'TESTING WORDS WORK!') {
  console.error('Decoding (CAPS) not working!');
  process.exit(1);
}
console.log('Decoding (CAPS) working!');
if (DECODED_TITLE !== 'Testing Words Work!') {
  console.error('Decoding (TITLE) not working!');
  process.exit(1);
}
console.log('Decoding (TITLE) working!')
