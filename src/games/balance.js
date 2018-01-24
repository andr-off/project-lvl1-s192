import { getRandomNumber, balance } from '../lib';
import engine from '..';

export default () => {
  const game = num => balance(Number(num));

  const description = '\nBalance the given number.';

  engine(description, () => getRandomNumber(100, 1000), game);
};
