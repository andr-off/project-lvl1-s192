export const getRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * ((max - min) + min));
  return result < min ? min : result;
};

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

export const gcd = (num1, num2) => {
  const smaller = num1 < num2 ? num1 : num2;
  const iter = (n1, n2, acc) => {
    if (n1 % acc === 0 && n2 % acc === 0) {
      return acc;
    }
    return iter(n1, n2, acc - 1);
  };
  return iter(num1, num2, smaller);
};
