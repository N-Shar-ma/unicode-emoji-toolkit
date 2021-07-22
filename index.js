module.exports = {
    hasEmojis,
    hasNoEmojis,
    hasOnlyEmojis,
    removeEmojis, // todo
    removeNonEmojis // todo
}

const emojiRegex = /((\p{Emoji})|(\p{Emoji_Presentation})|(\p{Emoji_Modifier})|(\p{Emoji_Modifier_Base})|(\p{Emoji_Component})|(\p{Extended_Pictographic}))*/gu
// const nonEmojiRegex = new RegExp("^("+emojiRegex.source+")")
const asciiRegex = /[ -~]+/g
const standaloneAsciiRegex = /[ -~]+(?!\ufe0f)/g // matches ascii when not as emoji components

function hasEmojis(str) { // works, language agnostic
    return !!removeStandaloneAscii(str).match(emojiRegex)
}

function hasNoEmojis(str) { // works, language agnostic
    return !hasEmojis(str)
}

function hasOnlyEmojis(str) { // works. but hacky, not thoroughly tested
    if(hasStandaloneAscii(str)) return false
    const emojiremovedStr = str.split(emojiRegex).map(c => c ? c : "").join("").trim()
    console.log(emojiremovedStr)
    return emojiremovedStr.length===0 || emojiremovedStr.length===2 ? true : false
}

// function hasAsciiOnlyAsEmoji(str) { // works
//     return !str.match(standaloneAsciiRegex)
// }

function hasStandaloneAscii(str) { // works
    return !!str.match(standaloneAsciiRegex)
}

function removeStandaloneAscii(str) { // works
    return str.replace(standaloneAsciiRegex, "");
}

function hasNoEmojis(str) {
    return (str !== removeEmojis(str))
}

function removeEmojis(str) { // todo
    // console.log(str.length)
}

function removeNonEmojis(str) { // half-done, works for common english
    const asciiLessStr = removeStandaloneAscii(str)
    return asciiLessStr
}

// testing 1💜#1️⃣💲 "हिन्दी में ..."

const s1 = "🆗❤🧡💛💚💝💜1️⃣"

console.log(removeStandaloneAscii("💲1️⃣"))
console.log(hasOnlyEmojis("हिन्दी"))