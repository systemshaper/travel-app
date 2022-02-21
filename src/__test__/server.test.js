import { fetchKeys } from '../client/js/fetchKeys'

describe('testing server', () => {
    test('testing "keys" route', () => {
        expect(fetchKeys()).toEqual(expect.anything())
    })
})