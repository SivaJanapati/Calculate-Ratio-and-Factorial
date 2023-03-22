const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");
const ratioAndFactorial = (a, b, c) => {
  const obj = {
    ratio: ratioOfTwoNumbers(a, b),
    factorial: factorialOfNumber(c),
  };
  return obj;
};

module.exports = ratioAndFactorial;
