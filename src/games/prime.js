import { isPrime, getRandomNumber } from '../lib';
import engine from '..';

export default () => {
  const rules = () => {
    const randomNumber = getRandomNumber(1, 100);
    const question = `Is this number prime? ${randomNumber}`;
    const answer = isPrime(randomNumber) ? 'yes' : 'no';
    return [question, answer];
  };

  // const description = 'Answer "yes" if number prime otherwise answer "no".';
  const description = '';

  engine(description, rules);
};
