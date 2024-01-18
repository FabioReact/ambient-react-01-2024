// import { expect, test, describe } from 'vitest'

const addition = (a: number, b: number) => {
    return a + b
}

describe('function addition', () => {
    test('1 + 2 should return 3', () => {
        expect(addition(1, 2)).toBe(3)
    })
});
