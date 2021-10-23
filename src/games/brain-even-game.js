import game from '../index.js';
import getRandomInt from '../get-random.js';

const minNumber = 0;
const maxNumber = 99;

const isEven = (num) => (num % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const numberToCheck = getRandomInt(minNumber, maxNumber);
  const expectedAnswer = isEven(numberToCheck) ? 'yes' : 'no';
  return [numberToCheck, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
