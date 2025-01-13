export class Calculator {
	constructor() {}
	add(input?: string): number {
		if (!input) {
			return 0;
		}
		const delimeters = /,|\n/;
    const values = input.split(delimeters).map(Number);
    const total = values.reduce((a, b) => a + b);
    return total;
	}
}