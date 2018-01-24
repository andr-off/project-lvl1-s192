import readlineSync from 'readline-sync';
import { getRandomNumber, balance } from '../lib';

export default () => {
  const accuracy = 1000;
  const randomNumber = getRandomNumber(100, accuracy);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const result = balance(randomNumber);
  const gameResult = {
    isCorrect: false,
    playerAnswer: answer,
    rightAnswer: result,
  };

  if (answer === result) {
    gameResult.isCorrect = true;
  }

  return gameResult;
};
