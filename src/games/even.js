import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../lib';

export default () => {
  const accuracy = 100;
  const randomNumber = getRandomNumber(1, accuracy);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const result = answer === 'yes' ? 'no' : 'yes';
  const gameResult = {
    isCorrect: false,
    playerAnswer: answer,
    rightAnswer: result,
  };

  if ((isEven(randomNumber) && answer === 'yes') ||
      (!isEven(randomNumber) && answer === 'no')) {
    gameResult.isCorrect = true;
  }

  return gameResult;
};
