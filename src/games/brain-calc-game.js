import game from '../index.js';
import getRandomInt from '../get-random.js';

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

const gameRule = 'What is the result of the expression?';

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operIndex = getRandomInt(0, operations.length - 1);

  const expression = `${num1} ${operations[operIndex]} ${num2}`;

  const expectedAnswer = String(calculateExpression(operations[operIndex], num1, num2));

  return [expression, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
