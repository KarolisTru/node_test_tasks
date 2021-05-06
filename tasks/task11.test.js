const {say} = require('./task11');

describe('Test #11', () => {
    describe('say', () => {
        test('should say("Hello, ")("it\'s me") to be "Hello, it\'s me"', () => {
            const result = say("Hello, ")("it's me");
            const expected = "Hello, it's me";
        
            expect(result).toBe(expected);
        })
    })
})