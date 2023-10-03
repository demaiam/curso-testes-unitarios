import calculator from "calculator";

describe("calculator tests", () => {
  it("should return the correct value", async () => {
    expect(calculator.sum(12, 3)).toBe(15);
    expect(calculator.sub(12, 3)).toBe(9);
    expect(calculator.mul(12, 3)).toBe(36);
    expect(calculator.div(12, 3)).toBe(4);
  });
})