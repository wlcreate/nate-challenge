const parseText = require('../utils/parseText')

describe('parseText', () => {
    test('of no words to return nothing', () => {
        expect(parseText("")).toStrictEqual({})
    })

    test('of one word to return one count', () => {
        expect(parseText("Hello"))
        .toStrictEqual({
            hello: 1
        })
    })

    test('of many of the same word to return one word with the correct count', () => {
        expect(parseText("World. WORLD! wORlD, worLD wOrLd. WoRlD"))
        .toStrictEqual({
            world: 6
        })
    })

    test('of many returns the correct count', () => {
        expect(parseText("Tell the audience what you're going to say. Say it. Then tell them what you've said."))
        .toStrictEqual({
            tell: 2,
            the: 1,
            audience: 1,
            what: 2,
            "you're": 1,
            going: 1,
            to: 1,
            say: 2,
            it: 1,
            then: 1,
            them: 1,
            "you've": 1,
            said: 1
        })
    })
})