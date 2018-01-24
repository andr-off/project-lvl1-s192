export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + min));

export const getRandomOperator = () => ['+', '-', '*'][getRandomNumber(0, 3)];

export const calc = (num1, num2, op) => {
  let result;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return result;
};

export const isEven = number => number % 2 === 0;
