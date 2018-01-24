import readlineSync from 'readline-sync';
import { getRandomNumber, gcd } from '../lib';

export default () => {
  const accuracy = 100;
  const number1 = getRandomNumber(1, accuracy);
  const number2 = getRandomNumber(1, accuracy);

  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const result = gcd(number1, number2);
  const gameResult = {
    isCorrect: false,
    playerAnswer: answer,
    rightAnswer: result,
  };

  if (Number(answer) === result) {
    gameResult.isCorrect = true;
  }

  return gameResult;
};
