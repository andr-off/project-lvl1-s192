import readlineSync from 'readline-sync';

const rightAnswerCount = 3;
const greeting = 'Welcome to the Brain Games!';

export default (game, rules) => {
  console.log(`${greeting}${rules}`);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  for (let i = 0; i < rightAnswerCount; i += 1) {
    const gameResult = game();

    if (gameResult === 'empty') {
      break;
    } else if (gameResult.isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`${gameResult.playerAnswer} is wrong ;(. Correct answer was ${gameResult.rightAnswer}`);
      break;
    }

    if (i === (rightAnswerCount - 1)) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
