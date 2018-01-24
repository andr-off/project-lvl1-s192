import { getRandomNumber, isEven } from '../lib';
import engine from '..';

export default () => {
  const game = (num) => {
    if (isEven(num)) {
      return 'yes';
    }
    return 'no';
  };

  const description = '\nAnswer "yes" if number even otherwise answer "no".';

  engine(description, () => getRandomNumber(1, 100), game);
};
