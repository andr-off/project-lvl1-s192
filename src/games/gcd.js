import { getRandomNumber, gcd } from '../lib';
import engine from '..';

export default () => {
  const gameStuff = () => {
    const accuracy = 100;
    const number1 = getRandomNumber(1, accuracy);
    const number2 = getRandomNumber(1, accuracy);
    return (`${number1} ${number2}`);
  };

  const game = (expression) => {
    const [number1, number2] = expression.split(' ');
    return gcd(Number(number1), Number(number2)).toString();
  };

  const description = '\nFind the greatest common divisor of given numbers.';

  engine(description, gameStuff, game);
};
