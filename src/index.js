import readlineSync from 'readline-sync';

const roundsNumber = 3;

const game = (gameRule, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let round = 1; round <= roundsNumber; round += 1) {
    const [question, expectedAnswer] = generateQuestion();

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer !== actualAnswer) {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
