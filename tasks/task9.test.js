const {sumNumbers} = require('./task9');

describe('Task #9', () => {
    describe('sumNumbers', () => {
        test('should sumNumbers([10, 6, [4, 8], 3, [6, 5, [9]]]) to be 51', () => {
            const result = sumNumbers([10, 6, [4, 8], 3, [6, 5, [9]]]);
            const expected = 51;
        
            expect(result).toBe(expected);
        })
    })
})