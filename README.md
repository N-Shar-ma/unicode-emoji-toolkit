# unicode-emoji-toolkit

**Testing and Polishing in progress 🏗🚧** 

A lightweight emoji utility library that actually works as you would expect! Filter out non emojis or vice-versa, and much more.

unicode-emoji-toolkit differs from other libraries that deal with emojis and regex, by being opinionated and **NOT treating digits `[0-9]`, `#` and `*` as emojis**, despite the Unicode Standard officially including them in Emoji characters.

Most people, including me, do not consider these characters to be emojis, and hence this library was born. As you might expect, it still counts #️⃣,*️⃣ and 0️⃣-9️⃣ as emojis

**NPM package coming soon!! 📦📜**

## Installation

(this section coming soon after NPM package)

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

Pull requests for any bug fixes or enhancements are welcome! Do create an issue before before making a PR.

## License

[MIT](https://choosealicense.com/licenses/mit/)
