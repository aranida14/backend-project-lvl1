import game from '../index.js';
import getRandomInt from '../get-random.js';

const gameRule = 'What is the result of the expression?';

const calculateExpression = (operator, operand1, operand2) => {
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    default:
      result = operand1 * operand2;
  }
  return result;
};

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const operIndex = getRandomInt(0, operations.length - 1);

  const expression = `${number1} ${operations[operIndex]} ${number2}`;

  const expectedAnswer = String(calculateExpression(operations[operIndex], number1, number2));

  return [expression, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
