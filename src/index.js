import readlineSync from 'readline-sync';

export default (description, rules) => {
  const rightAnswerCount = 3;
  const greeting = `Welcome to the Brain Games!\n${description}`;

  console.log(greeting);

  const playerName = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${playerName}!\n`);

  const iter = (acc) => {
    if (acc === rightAnswerCount) {
      console.log(`Congratulations, ${playerName}!`);
      return null;
    }

    const [question, result] = rules();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    const message = `${answer} is wrong ;(. Correct answer was ${result}\nLet's try again, ${playerName}!`;
    console.log(message);
    return null;
  };

  iter(0);
};
