# unicode-emoji-toolkit
A lightweight emoji utility library that actually works! Filter out non emojis or vice-versa, and much more

**Testing and Polishing in progress 🏗🚧** 

**NPM package coming soon!! 📦📜**

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