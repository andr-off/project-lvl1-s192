import { getRandomNumber, getRandomOperator, calc } from '../lib';
import engine from '..';

export default () => {
  const rules = () => {
    const accuracy = 10;
    const number1 = getRandomNumber(0, accuracy);
    const number2 = getRandomNumber(0, accuracy);
    const operator = getRandomOperator();
    const question = `${number1} ${operator} ${number2}`;
    const answer = calc(number1, number2, operator).toString();
    return [question, answer];
  };

  const description = 'What is the result of the expression?';

  engine(description, rules);
};
