import { Calculator } from "./services/calculator.service";
const calculator = new Calculator();
console.log("result:", calculator.add("1\n5, 6"));