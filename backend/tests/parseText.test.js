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

    test('of many sentences returns the correct count', () => {
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

    test('of one quote to return the correct count', () => {
        expect(parseText("\"Hello World!\""))
        .toStrictEqual({
            hello: 1,
            world: 1
        })
    })

    test('of many quotes to return the correct count', () => {
        expect(parseText("\"Tell the audience what you're going to say. Say it.\" Say it. \"Then tell them what you've said.\""))
        .toStrictEqual({
            tell: 2,
            the: 1,
            audience: 1,
            what: 2,
            "you're": 1,
            going: 1,
            to: 1,
            say: 3,
            it: 2,
            then: 1,
            them: 1,
            "you've": 1,
            said: 1
        })
    })

    test('of numbers to return nothing', () => {
        expect(parseText("1, 2, 3, 10")).toStrictEqual({})
    })

    test('of numbers and words to return only the words with the correct count', () => {
        expect(parseText("\"5, 4, three, 2, one! Happy 2021!\""))
        .toStrictEqual({
            three: 1,
            one: 1,
            happy: 1
        })
    })
})