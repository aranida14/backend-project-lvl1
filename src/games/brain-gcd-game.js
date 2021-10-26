import game from '../index.js';
import getRandomInt from '../get-random.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
};

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;

  const expectedAnswer = String(findGCD(num1, num2));

  return [question, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
