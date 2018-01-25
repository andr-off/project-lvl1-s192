import { getRandomNumber, gcd } from '../lib';
import engine from '..';

export default () => {
  const rules = () => {
    const accuracy = 100;
    const number1 = getRandomNumber(1, accuracy);
    const number2 = getRandomNumber(1, accuracy);
    const question = (`${number1} ${number2}`);
    const answer = gcd(number1, number2).toString();
    return [question, answer];
  };
  const description = 'Find the greatest common divisor of given numbers.';

  engine(description, rules);
};
