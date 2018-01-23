import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + min));
const isEven = number => number % 2 === 0;

export default () => {
  const randomNumber = getRandomNumber(1, 100);
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
