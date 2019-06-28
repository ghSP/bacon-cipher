// const cipher = require('.');
// const TEXT = 'Testing words work!';
// const ENCODED = cipher.encode(TEXT);
// const DECODED_CAPS = cipher.decode(ENCODED, false);
// const DECODED_TITLE = cipher.decode(ENCODED);
// if (ENCODED !== 'BAABBAABAABAABABAABBABAAAABBABAABBA BABBAABBBABAAABAAABBBAABA BABBAABBBABAAABABABA!') {
//   console.error('Encoding not working!');
//   console.log(ENCODED);
//   process.exit(1);
// }
// console.log('Encoding working!');
// if (DECODED_CAPS !== 'TESTING WORDS WORK!') {
//   console.error('Decoding (CAPS) not working!');
//   console.log(DECODED_CAPS);
//   process.exit(1);
// }
// console.log('Decoding (CAPS) working!');
// if (DECODED_TITLE !== 'Testing Words Work!') {
//   console.error('Decoding (TITLE) not working!');
//   console.log(DECODED_TITLE);
//   process.exit(1);
// }
// console.log('Decoding (TITLE) working!')

const tape = require('tape');
const cipher = require('.');

tape('Encoding', (t) => {
  t.plan(1);
  t.equal(cipher.encode('Testing words work!'), 'BAABBAABAABAABABAABBABAAAABBABAABBA BABBAABBBABAAABAAABBBAABA BABBAABBBABAAABABABA!');
});

tape('Decoding (CAPS)', (t) => {
  t.plan(1);
  t.equal(cipher.decode(cipher.encode('Testing words work!'), false), 'TESTING WORDS WORK!');
});

tape('Decoding (TITLE)', (t) => {
  t.plan(2);
  t.equal(cipher.decode(cipher.encode('Testing words work!')), 'Testing Words Work!');
  t.equal(cipher.decode(cipher.encode('Testing words work!'), true), 'Testing Words Work!');
});