import { getRandomNumber, getRandomOperator, calc } from '../lib';
import engine from '..';

export default () => {
  const gameStuff = () => {
    const accuracy = 10;
    const number1 = getRandomNumber(0, accuracy);
    const number2 = getRandomNumber(0, accuracy);
    const operator = getRandomOperator();
    return `${number1} ${operator} ${number2}`;
  };

  const game = (expression) => {
    const [number1, operator, number2] = expression.split(' ');
    return calc(Number(number1), Number(number2), operator).toString();
  };

  const description = '\nWhat is the result of the expression?';

  engine(description, gameStuff, game);
};
