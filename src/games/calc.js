import readlineSync from 'readline-sync';
import { getRandomNumber, getRandomOperator, calc } from '../lib';

export default () => {
  const accuracy = 10;
  const number1 = getRandomNumber(0, accuracy);
  const number2 = getRandomNumber(0, accuracy);
  const operator = getRandomOperator();
  const randomExpression = `${number1} ${operator} ${number2}`;
  console.log(`Question: ${randomExpression}`);
  const answer = readlineSync.question('Your answer: ');
  const result = calc(number1, number2, operator);
  const gameResult = [];

  if (Number(answer) === result) {
    gameResult.isCorrect = true;
  } else {
    gameResult.isCorrect = false;
    gameResult.playerAnswer = answer;
    gameResult.rightAnswer = result;
  }
  return gameResult;
};
