import { getRandomNumber, balance } from '../lib';
import engine from '..';

export default () => {
  const rules = () => {
    const question = getRandomNumber(100, 1000);
    const answer = balance(question);
    return [question, answer];
  };

  const description = 'Balance the given number.';

  engine(description, rules);
};
