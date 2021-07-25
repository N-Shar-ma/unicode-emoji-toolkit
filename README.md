# unicode-emoji-toolkit

A lightweight, 0 dependency emoji utility library that actually works as you would expect. (Digits are not emojis!) Detect emojis, filter out non emojis or vice-versa, and much more

unicode-emoji-toolkit differs from other libraries that deal with emojis and regex, by being opinionated and **NOT treating digits `[0-9]`, `#` and `*` as emojis**, despite the Unicode Standard officially including them in Emoji characters.

Most people, including me, do not consider these characters to be emojis, and hence this library was born. As you might expect, it still counts #️⃣,*️⃣ and 0️⃣-9️⃣ as emojis

## Installation

Using npm:

```
npm install unicode-emoji-toolkit
```
or
```
npm i unicode-emoji-toolkit
```

## Usage

- Import the library

```
const emj = require("unicode-emoji-toolkit")
```

- `boolean hasEmojis(str: string)`

```
console.log(emj.hasEmojis("💜abc1️⃣"))
// true
```

- `boolean hasNoEmojis(str: string)`

```
console.log(emj.hasNoEmojis("abc1#"))
// true
```

- `boolean hasOnlyEmojis(str: string)`

```
console.log(emj.hasOnlyEmojis("🆗❤🧡💛💲💚💝💜1️⃣"))
// true
```

- `string removeEmojis(str: string)`

```
console.log(emj.removeEmojis("💜abc1️⃣"))
// "abc"
```

- `string removeNonEmojis(str: string)`
  
```
console.log(emj.removeNonEmojis("💜abc1️⃣"))
// "💜1️⃣"
```

## Contributing

Pull requests for any bug fixes or enhancements are welcome! 

- Do create an issue before before starting work on a PR. 
- After forking and cloning this repositry to your local machine, run `npm install` to install the developement dependency(jest) for testing.
- After making the proposed changes locally, add tests and update the usage section in the README if and as required.
- Bump up the version by running `npm version [major | minor | patch]` according to the changes made. Refer to [SemVer](https://semver.org) for more help. 
- Be sure to run all tests using `npm run test` before pushing, and make a PR only if all tests pass.

## License

[MIT](https://choosealicense.com/licenses/mit/)
