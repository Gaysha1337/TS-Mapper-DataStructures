import { Calculator } from "../src/Calculator.js";

describe("Given Calculator imported", () => {
  it("then Calculator should exist", () => {
    expect(Calculator).toBeDefined();
  });
  describe("When Calculator.Add(1, 2)", () => {
    it("then 3 should be returned", () => {
      expect(Calculator.Add(1, 2)).toBe(3);
    });
  });
  describe("When Calculator.Subtract(2,1)", () => {
    it("then 1 should be returned", () => {
      expect(Calculator.Subtract(2, 1)).toBe(1);
    });
  });
  describe("When Calculator.Multiply(2,2)", () => {
    it("then 4 should be returned", () => {
      expect(Calculator.Multiply(2, 2)).toBe(4);
    });
  });
  describe("When Calculator.Divide(2,2)", () => {
    it("then 1 should be returned", () => {
      expect(Calculator.Divide(2, 2)).toBe(1);
    });
  });
});
