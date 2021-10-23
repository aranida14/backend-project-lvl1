import game from '../index.js';
import getRandomInt from '../get-random.js';

const minNumber = 1;
const maxNumber = 50;

const gameRule = 'What is the result of the expression?';

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomInt(minNumber, maxNumber);
  const num2 = getRandomInt(minNumber, maxNumber);
  const operIndex = getRandomInt(0, operations.length - 1);

  const expression = `${num1} ${operations[operIndex]} ${num2}`;

  let expectedAnswer;
  switch (operations[operIndex]) {
    case '+':
      expectedAnswer = String(num1 + num2);
      break;
    case '-':
      expectedAnswer = String(num1 - num2);
      break;
    default:
      expectedAnswer = String(num1 * num2);
  }

  return [expression, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
