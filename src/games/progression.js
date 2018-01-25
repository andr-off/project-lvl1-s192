import { getRandomProgression, getRandomNumber } from '../lib';
import engine from '..';

export default () => {
  const rules = () => {
    const amountOfItems = 10;
    const progression = getRandomProgression(amountOfItems);
    const randomIndex = getRandomNumber(0, amountOfItems);
    const answer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };

  const description = 'What number is missing in this progression?';

  engine(description, rules);
};
