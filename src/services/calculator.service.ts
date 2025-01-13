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

	add(input?: string): number {
		if (!input) {
			return 0;
		}
    const { delimeter, values } = this.getDelimeterAndNumbers(input);
    const numbers = values.split(delimeter).map(Number);
    const total = numbers.reduce((a, b) => a + b);
    return total;
	}
}