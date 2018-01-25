import readlineSync from 'readline-sync';

export default (description, rules) => {
  const rightAnswerCount = 3;
  const greeting = `Welcome to the Brain Games!\n${description}`;

  console.log(greeting);

  const playerName = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${playerName}!\n`);

  for (let i = 0; i < rightAnswerCount; i += 1) {
    const [question, result] = rules();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

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
