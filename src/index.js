import readlineSync from 'readline-sync';

export default () => {
  const answer = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${answer}!`);
};
