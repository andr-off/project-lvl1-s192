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

export const gcd = (a, b) => {
  if ((a !== 0) && (b !== 0)) {
    if (a > b) {
      return gcd((a % b), b);
    }
    return gcd((b % a), a);
  }
  return a + b;
};

export const balance = (number) => {
  const digits = String(number).split('');
  const biggest = Math.max(...digits);
  const smallest = Math.min(...digits);

  if (biggest - smallest <= 1) {
    return digits
      .sort((a, b) => a - b)
      .join('');
  }

  const indexOfBiggest = digits.indexOf(biggest.toString());
  const indexOfSmallest = digits.indexOf(smallest.toString());
  digits[indexOfBiggest] = biggest - 1;
  digits[indexOfSmallest] = smallest + 1;

  return balance(Number(digits.join('')));
};
