const { range1, range2 } = require("./task1");

// Suite
describe("Task #1", () => {
  describe("range1", () => {
    performTestsFor(range1);
  });
  describe("range2", () => {
    performTestsFor(range2);
  });
});

function performTestsFor(func) {
  test(`should ${func.name}(x=1, y=10) to be [1, 2, 3, 4, 5, 6, 7, 8, 9]`, () => {
    // Setup

    // Execution
    const result = func(1, 10);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Assertion
    expect(result).toEqual(expected);
  });
  test(`should ${func.name}(x=20, y=10) to be [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]`, () => {
    // Setup

    // Execution
    const result = func(20, 10);
    const expected = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];

    // Assertion
    expect(result).toEqual(expected);
  });
  test(`should ${func.name}(x=1.3, y=3.5) to be undefined`, () => {
    // Setup

    // Execution
    const result = func(1.3, 3.5);
    const expected = undefined;

    // Assertion
    expect(result).toEqual(expected);
  });
}
