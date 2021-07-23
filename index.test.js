const emj = require("./index.js")

const hasEmojisTestCases = [["हिन्दी1️⃣", true], ["`हिन्दी1#3eng`", false]]

describe("hasEmojis() function:", () => {
    test.each(hasEmojisTestCases)("given %s as argument, returns %p", (input, output) => {
        expect(emj.hasEmojis(input)).toBe(output)
    })
})

const hasNoEmojisTestCases = [["हिन्दी1️⃣", false], ["हिन्दी1#3eng", true]]

describe("hasNoEmojis() function:", () => {
    test.each(hasNoEmojisTestCases)("given %s as argument, returns %p", (input, output) => {
        expect(emj.hasNoEmojis(input)).toBe(output)
    })
})

const hasOnlyEmojisTestCases = [["🆗❤🧡💛💲💚💝💜1️⃣", true], ["00️⃣11️⃣22️⃣##️⃣**️⃣", false]]

describe("hasOnlyEmojis() function:", () => {
    test.each(hasOnlyEmojisTestCases)("given %s as argument, returns %p", (input, output) => {
        expect(emj.hasOnlyEmojis(input)).toBe(output)
    })
})

const removeEmojisTestCases = [["हिन्दी1💜#31️⃣में", "हिन्दी1#3में"], ["🆗❤🧡💛💲💚💝💜1️⃣", ""], ["हिन्दी1#3eng", "हिन्दी1#3eng"]]

describe("removeEmojis() function:", () => {
    test.each(removeEmojisTestCases)("given %s as argument, returns %s", (input, output) => {
        expect(emj.removeEmojis(input)).toBe(output)
    })
})

const removeNonEmojisTestCases = [["हिन्दी1💜#31️⃣में", "💜1️⃣"], ["🆗❤🧡💛💲💚💝💜1️⃣", "🆗❤🧡💛💲💚💝💜1️⃣"], ["हिन्दी1#3eng", ""]]

describe("removeNonEmojis() function:", () => {
    test.each(removeNonEmojisTestCases)("given %s as argument, returns %s", (input, output) => {
        expect(emj.removeNonEmojis(input)).toBe(output)
    })
})