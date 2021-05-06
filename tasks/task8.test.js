const { spy } = require("./task8");

describe("Task #8", () => {
  describe("spy", () => {
    test("should spy function track times the wrapped function was called and return them if .report() method is called", () => {
      function myFunc() {
        return console.log("Hello");
      }

      const spied = spy(myFunc);
      spied(1);
      spied(2);
      spied(100);
      let result = spied.report();

      const expected = { totalCalls: 3 };

      expect(result).toEqual(expected);
    });
  });
});
