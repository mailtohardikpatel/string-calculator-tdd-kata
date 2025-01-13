import { Calculator } from "../services/calculator.service";

describe("Calculator", () => {
	let calculator: Calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	it("should return zero when no input passed", () => {
		expect(calculator.add()).toBe(0);
	});

	it("should be able to take single input string and should return the same value", () => {
		expect(calculator.add("1")).toBe(1);
	});

	it("should accept two string as an input and return total as a result", () => {
		expect(calculator.add("1, 5")).toBe(6);
	});

	it("should accept multiple strings as an input and return total as a result", () => {
    expect(calculator.add("1, 5, 6")).toBe(12);
  });

	it("should be able to handle \n as a delimeter", () => {
    expect(calculator.add("1\n5, 6")).toBe(12);
  });

});