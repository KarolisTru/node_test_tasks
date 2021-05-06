const {sevenAte9} = require('./task7');

describe('Test #7', () => {
    describe('sevenAte9', () => {
        test('should sevenAte9("79712312") to be "7712312"', () => {
            const result = sevenAte9('79712312');
            const expected = '7712312';
        
            expect(result).toBe(expected);
        });
        test('should sevenAte9("79797") to be "777"', () => {
            const result = sevenAte9('79797');
            const expected = '777';
        
            expect(result).toBe(expected);
        })
        test('should sevenAte9(79797) to be "777"', () => {
            const result = sevenAte9(79797);
            const expected = '777';
        
            expect(result).toBe(expected);
        })
    })
})