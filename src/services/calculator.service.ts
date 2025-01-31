import {
	CUSTOM_DELIMETERS_MATCH,
	DELIMETER_REPLACE_VALUE,
	DELIMETER_SEARCH_VALUE,
	EXTRACT_DELIMETERS,
} from "../util/constant";

export class Calculator {
	constructor() { }

	private escapeRegex(delimiter: string): string {
		return delimiter.replace(DELIMETER_SEARCH_VALUE, DELIMETER_REPLACE_VALUE);
	}

	private getDelimeterAndNumbers(input: string): {
		delimeter: RegExp;
		values: string;
	} {
		let delimeters = [",", "\n"];
		let numbers = input;
		if (input.startsWith("//")) {
			const customDelimeters = input.match(CUSTOM_DELIMETERS_MATCH);
			if (customDelimeters!.length > 0) {
				const rawDelimiters = customDelimeters![1];
				if (rawDelimiters.startsWith("[") && rawDelimiters.endsWith("]")) {
					//'[*%*][**]'
					const dlms = rawDelimiters.match(EXTRACT_DELIMETERS);
					delimeters = dlms?.map((d) => d.slice(1, -1)) || [];
				} else {
					delimeters = [rawDelimiters]; // *%*  **
				}
				numbers = input.substring(customDelimeters![0].length);
			}
		}
		const delimiterRegex = new RegExp( ///\*\%\*|\*\*/
			delimeters.map(this.escapeRegex).join("|")
		);
		return { delimeter: delimiterRegex, values: numbers! };
	}

	private checkNegativeNumbers(input: Array<number>): Array<number> {
		const negativeNumbers = input.filter((value) => value < 0);
		return negativeNumbers;
	}

	calculate(input?: string): number {
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

		const allowedNumbers = numbers.filter((num) => num < 1000)
		let result: number = 0;
		if (delimeter.test("*")) {
			result = this.multiply(allowedNumbers);
		} else if (delimeter.test("o")) {
			const oddNumbers = allowedNumbers.filter((num) => num % 2 !== 0)
			result = this.add(oddNumbers);
		} else {
			result = this.add(allowedNumbers);
		}

		return result;
	}

	private add(numbers: number[]): number {
		return numbers.reduce((a, b) => {
			return a + b;
		}, 0);
	}

	private multiply(numbers: number[]): number {
		return numbers.reduce((a, b) => {
			return a * b;
		}, 1);
	}
}
