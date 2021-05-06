const { removeDuplicates1, removeDuplicates2 } = require("./task4");

describe("Task #4", () => {
  describe("removeDuplicates1", () => {
    performTestsFor(removeDuplicates1);
  });

  describe("removeDuplicates2", () => {
    performTestsFor(removeDuplicates2);
  });
});

function performTestsFor(func) {
  test(`should ${func.name}([1, 2, 2, 2, 3, 5, 6, 3, 10, 8]) to strict equal [1, 2, 3, 5, 6, 10, 8]`, () => {
    const result = func([1, 2, 2, 2, 3, 5, 6, 3, 10, 8]);
    const expected = [1, 2, 3, 5, 6, 10, 8];

    expect(result).toEqual(expected);
  });
  test(`should ${func.name}(['gg', 'btw', 'andy', 'btw', 'andy']) to strict equal ['gg', 'btw', 'andy']`, () => {
    const result = func(["gg", "btw", "andy", "btw", "andy"]);
    const expected = ["gg", "btw", "andy"];

    expect(result).toEqual(expected);
  });
}
