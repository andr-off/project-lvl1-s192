import readlineSync from 'readline-sync';

export default (description, gameStuff, game) => {
  const rightAnswerCount = 3;
  const greeting = `Welcome to the Brain Games!${description}`;

  console.log(greeting);

  const playerName = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${playerName}!\n`);

  for (let i = 0; i < rightAnswerCount; i += 1) {
    const stuff = gameStuff();
    console.log(`Question: ${stuff}`);

    const answer = readlineSync.question('Your answer: ');
    const result = game(stuff);

    if (answer === result) {
      console.log('Correct!');
    } else {
      const message = `${answer} is wrong ;(. Correct answer was ${result}\nLet's try again, ${playerName}!`;
      console.log(message);
      break;
    }

    if (i === (rightAnswerCount - 1)) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
