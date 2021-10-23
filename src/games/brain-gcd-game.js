import game from '../index.js';
import getRandomInt from '../get-random.js';
import findGCD from '../find-gcd.js';

const minNumber = 1;
const maxNumber = 100;

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const num1 = getRandomInt(minNumber, maxNumber);
  const num2 = getRandomInt(minNumber, maxNumber);

  const question = `${num1} ${num2}`;

  const expectedAnswer = String(findGCD(num1, num2));

  return [question, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
