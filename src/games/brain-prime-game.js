import game from '../index.js';
import getRandomInt from '../get-random.js';
import isPrime from '../is-prime.js';

const minNumber = 2;
const maxNumber = 100;

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => {
  const num = getRandomInt(minNumber, maxNumber);

  const question = `${num}`;

  const expectedAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
