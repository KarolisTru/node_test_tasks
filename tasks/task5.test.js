const {wordSearch} = require('./task5');

describe("Task #5", () => {
    describe("wordSearch", () => {
        test('should wordSearch("alibaba", "I always wanted to meet Alibaba, but did not manage to") return true', () => {
            const result = wordSearch("alibaba", "I always wanted to meet Alibaba, but did not manage to");
            const expected = true;
        
            expect(result).toBe(expected);
        });
        test('should wordSearch("op op", "HoP op") return true', () => {
            const result = wordSearch("op op", "HoP op");
            const expected = true;
        
            expect(result).toBe(expected);
        })
        test('should wordSearch("ran", "Brunger is not even a word") return true', () => {
            const result = wordSearch("ran", "Brunger is not even a word");
            const expected = false;
        
            expect(result).toBe(expected);
        })
    });
})