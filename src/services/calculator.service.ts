export class Calculator {
	constructor() {}

	private getDelimeterAndNumbers(input: string): {
    delimeter: RegExp;
    values: string;
  } {
    let delimeter = /,|\n/;
    let numbers = input;
    if (input.startsWith("//")) {
      const delimeters = input.match(/^\/\/(.+)\n/);
      if (delimeters) {
        delimeter = new RegExp(delimeters[1]);
        numbers = input.substring(delimeters[0].length);
      }
    }
    return { delimeter, values: numbers! };
  }

	private checkNegativeNumbers(input: Array<number>): Array<number> {
    const negativeNumbers = input.filter((value) => value < 0);
    return negativeNumbers;
  }

	add(input?: string): number {
		if (!input) {
			return 0;
		}
    const { delimeter, values } = this.getDelimeterAndNumbers(input);
    const numbers = values.split(delimeter).map(Number);
		const negativeNumbers = this.checkNegativeNumbers(numbers);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed, ${negativeNumbers.join(",")}`
      );
    }
		const total = numbers.reduce((a, b) => {
      if (b > 1000) {
        b = 0;
      }
      return a + b;
    }, 0);
    return total;
	}
}