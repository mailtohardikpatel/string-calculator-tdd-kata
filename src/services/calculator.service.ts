export class Calculator {
	constructor() {}
	add(input?: string): number {
		if (!input) {
			return 0;
		}
		const values = input.split(",");
		return parseInt(values[0]) + (parseInt(values[1]) || 0);
	}
}