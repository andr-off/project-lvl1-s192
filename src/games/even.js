import { getRandomNumber, isEven } from '../lib';
import engine from '..';

export default () => {
  const rules = () => {
    const question = getRandomNumber(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };

  const description = 'Answer "yes" if number even otherwise answer "no".';

  engine(description, rules);
};
