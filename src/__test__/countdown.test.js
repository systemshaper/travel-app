const { createCountdown } = require("../client/js/countdown")

describe('testing countdown', () => {
    const date = new Date()
    test('confirm that countdown returns message when passing a date', () => {
        expect(createCountdown(date)).toEqual(expect.stringMatching(/day/))
    })
})