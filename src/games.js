import readlineSync from 'readline-sync';

const maxNumber = 100;
const roundsNumber = 3;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (num) => (num % 2 === 0);

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctCount = 0;

  while (correctCount < roundsNumber) {
    const numberToCheck = getRandomInt(maxNumber);
    const expectedAnswer = isEven(numberToCheck) ? 'yes' : 'no';
    console.log(`Question: ${numberToCheck}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer !== actualAnswer) {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    correctCount += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
