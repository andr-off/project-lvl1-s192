import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = number => number % 2 === 0;
const rightAnswerCount = 3;
const greeting = 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".';

export default () => {
  console.log(greeting);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = 0; i < rightAnswerCount; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && answer === 'yes') ||
        (!isEven(randomNumber) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.\nLet's try again, ${playerName}!`);
      break;
    }

    if (i === (rightAnswerCount - 1)) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
