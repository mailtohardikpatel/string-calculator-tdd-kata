export class Calculator {
	constructor() {}
	add(input?: string): number {
		if (!input) {
			return 0;
		}
		const values = input.split(",").map(Number);
    const total = values.reduce((a, b) => a + b);
    return total;
	}
}