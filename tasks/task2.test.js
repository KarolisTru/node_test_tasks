const { sum1, sum2 } = require('./task2');

describe('Task #2', () => {
    describe('sum1', () => {
        performTestsFor(sum1);
    })
    describe('sum2', () => {
        performTestsFor(sum2);
    })
})

function performTestsFor(func) {
    test(`should ${func.name}(1, 3, 5, 10) to be 19`, () => {
        const result = func(1, 3, 5, 10);
        const expected = 19;
    
        expect(result).toBe(expected);
      });
      test(`should ${func.name}(1, 3, 5, -10) to be -1`, () => {
        const result = func(1, 3, 5, -10);
        const expected = -1;
    
        expect(result).toBe(expected);
      });
      test(`should ${func.name}(20) to be 20`, () => {
        const result = func(20);
        const expected = 20;
    
        expect(result).toBe(expected);
      });
      test(`should ${func.name}(1.55, 2.36) to be 3.91`, () => {
        const result = func(1.55, 2.36);
        const expected = 3.91;
    
        expect(result).toBeCloseTo(expected);
      });
}

