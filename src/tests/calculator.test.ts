import { Calculator } from "../services/calculator.service";

describe("Calculator", () => {
	let calculator: Calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	it("should return zero when no input passed", () => {
		expect(calculator.calculate()).toBe(0);
	});

	it("should be able to take single input string and should return the same value", () => {
		expect(calculator.calculate("1")).toBe(1);
	});

	it("should accept two string as an input and return total as a result", () => {
		expect(calculator.calculate("1, 5")).toBe(6);
	});

	it("should accept multiple strings as an input and return total as a result", () => {
		expect(calculator.calculate("1, 5, 6")).toBe(12);
	});

	it("should handle \n as a delimeter", () => {
		expect(calculator.calculate("1\n5, 6")).toBe(12);
	});

	it("should be able to support delimeters at the beginning of the input", () => {
		expect(calculator.calculate("//;\n1;2")).toBe(3);
	});

	it("should throw abn error when input contains negative numbers", () => {
		expect(() => {
			calculator.calculate("1,2,5,-1,6,-5");
		}).toThrow("Negative numbers not allowed, -1,-5");
	});

	it("should ignore the numbers which are greater than 1000", () => {
		expect(calculator.calculate("1,2,3,4,1001")).toBe(10);
	});

	it("should work when delimeter characters are more than 1", () => {
		expect(calculator.calculate("//[***]\n1***2***3")).toBe(6);
	});

	it("should work with multiple delimeters", () => {
		expect(calculator.calculate("//[*][%]\n1*2%3")).toBe(6);
	});

	it("should be able to support * delimeters and should perform multiplication for this", () => {
		expect(calculator.calculate("//*\n1*2*5")).toBe(10);
	});

});