import game from '../index.js';
import getRandomInt from '../get-random.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const num = getRandomInt(2, 100);

  const question = `${num}`;

  const expectedAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
