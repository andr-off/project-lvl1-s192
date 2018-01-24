import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../lib';

export default () => {
  const accuracy = 100;
  const randomNumber = getRandomNumber(2, accuracy);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const gameResult = {};

  if ((isEven(randomNumber) && answer === 'yes') ||
      (!isEven(randomNumber) && answer === 'no')) {
    gameResult.isCorrect = true;
  } else {
    gameResult.iscorrect = false;
    gameResult.playerAnswer = answer;
    gameResult.rightAnswer = (answer === 'yes' ? 'no' : 'yes');
  }
  return gameResult;
};
