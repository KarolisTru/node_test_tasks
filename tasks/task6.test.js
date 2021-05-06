const {sum} = require('./task6');

describe("Task #6", () => {
    describe('sum', () => {
        test('should sum(2)(7) return 9', () => {
            const result = sum(2)(7);
            const expected = 9;
        
            expect(result).toBe(expected);
        });
        test('should const fn = sum(2); fn(7) return 9', () => {
            const fn = sum(2);
            const result = fn(7);
            const expected = 9;
        
            expect(result).toBe(expected);
        });
        test('should const sum("ascii")(5) return undefined', () => {
            const result = sum("ascii")(5);
            const expected = undefined;
        
            expect(result).toBe(expected);
        });
        test('should const sum(2.27)(3.45) return 5.72', () => {
            const result = sum(2.27)(3.45);
            const expected = 5.72;
        
            expect(result).toBeCloseTo(expected);
        });
    })
})