import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + min));
const getRandomOperator = () => ['+', '-', '*'][getRandomNumber(0, 3)];
const calc = (num1, num2, op) => {
  let result;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return result;
};

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
