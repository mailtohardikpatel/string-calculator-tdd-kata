import { Calculator } from "./services/calculator.service";
const calculator = new Calculator();
console.log("result:", calculator.calculate("//[*%*][**]\n1*%*2**3"));