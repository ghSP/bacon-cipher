# Bacon Cipher

This is a baconian cipher based off of [geocaching toolbox](https://www.geocachingtoolbox.com/index.php?lang=en&page=baconianCipher). Currently, it is using the V2 method, as that will create unique 'characters', whereas in the standard version `I` and `J` would share identical patterns, as would `U` and `V`

```js
const { encode, decode, version } = require('@yaas/bacon-cipher');

const text = 'This is test text!';
const encoded = encode(text);
const decoded = decode(encoded /*, true */);

console.log(encoded);
// => BAABAAABBBABAAABAAAB ABAAABAAAB BAABAAABAABAAABBAABA BAABAAABAABABABBAABA!

console.log(decoded);
// => This Is Test Text!

console.log(decode(encoded, false));
// => THIS IS TEST TEXT!


console.log(version);
// => SemVer Version
```
With the `decode` function, there is an option to *not* use title case. This must be set explicitly and will return all uppercase letters.

### LICENSE
[MIT License](https://opensource.org/licenses/MIT)