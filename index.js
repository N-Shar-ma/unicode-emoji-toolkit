module.exports = {
    hasEmojis,
    hasNoEmojis,
    hasOnlyEmojis,
    removeEmojis,
    removeNonEmojis
}

// matches all emoji components including digits, # and *
const emojiRegex = /((\p{Emoji})|(\p{Emoji_Presentation})|(\p{Emoji_Modifier})|(\p{Emoji_Modifier_Base})|(\p{Emoji_Component})|(\p{Extended_Pictographic}))*/gu

// matches ascii when not as emoji components
const standaloneAsciiRegex = /[ -~]+(?!\ufe0f)/g 


// should ideally be named "hasEmojiComponents" but for brevity it is hasEmoji
// returns true if str has 1 or more emoji components, else false
function hasEmojis(str) { 
    return !!(removeStandaloneAscii(str).match(emojiRegex).join(""))
}

// returns true if str has no emoji components, else false
function hasNoEmojis(str) { 
    return !hasEmojis(str)
}

// returns true if str only has emoji components, else false
function hasOnlyEmojis(str) { 
    return (removeNonEmojis(str) === str)
}

// returns a string removing all emoji components from str, and retaining only its non emoji components
function removeEmojis(str) { 
    const emojis = removeNonEmojis(str)
    const strArr = str.split("")
    return strArr.filter((c,i) => !emojis.includes(c) || (i<strArr.length-1 && c.match(standaloneAsciiRegex) && strArr[i+1]!=="\ufe0f")).join("")
}

// returns a string removing all non emoji components from str, and retaining only its emoji components
function removeNonEmojis(str) { 
    return removeStandaloneAscii(str).match(emojiRegex).join("")
}

// returns a string removing all standalone ascii characters (not those as emoji components)
function removeStandaloneAscii(str) { // util
    return str.replace(standaloneAsciiRegex, "");
}