const { CalculatorES5, CalculatorES6 } = require("./task10.js");

describe("Task #10", () => {
  describe("CalculatorES5", () => {
    performTestsFor(CalculatorES5);
  });

  describe("CalculatorES6", () => {
    performTestsFor(CalculatorES6);
  });
});

function performTestsFor(Func) {
  test(`should const calc = new ${Func.name}(0) be chainable and calc.add(5).multiply(2).add(20).divide(3).answer to be 10 `, () => {
    const calc = new Func(0);
    const result = calc.add(5).multiply(2).add(20).divide(3).answer;
    const expected = 10;

    expect(result).toBe(expected);
  });
}
