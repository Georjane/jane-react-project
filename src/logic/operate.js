import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === 'x') {
    result = num1 * num2;
  } else if (operation === '÷') {
    if (num2 === '0') {
      return 'Division by zero Error';
    }
    result = num1 / num2;
  } else if (operation === '%') {
    result = num1 / 100;
  }
  return result.toString();
};

export default operate;
