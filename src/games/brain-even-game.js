import game from '../index.js';
import getRandomInt from '../get-random.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateQuestion = () => {
  const numberToCheck = getRandomInt(0, 99);
  const expectedAnswer = isEven(numberToCheck) ? 'yes' : 'no';
  return [numberToCheck, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
