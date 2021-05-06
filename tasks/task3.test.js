const { motto1, motto2 } = require("./task3");

describe("Task #3", () => {
  describe("motto1", () => {
    performTestsFor(motto1);
  });

  describe("motto2", () => {
    performTestsFor(motto2);
  });
});

function performTestsFor(func) {
  test(`should ${func.name}("Targaryen") to be "Fire and Blood"`, () => {
    const result = func("Targaryen");
    const expected = "Fire and Blood";

    expect(result).toBe(expected);
  });
  test(`should ${func.name}("Martell") to be "Unbowed, Unbent, Unbroken"`, () => {
    const result = func("Martell");
    const expected = "Unbowed, Unbent, Unbroken";

    expect(result).toBe(expected);
  });
  test(`should ${func.name}("Simpsons") to be undefined`, () => {
    const result = func("Simpsons");
    const expected = undefined;

    expect(result).toBe(expected);
  });
}
