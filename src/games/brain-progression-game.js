import game from '../index.js';
import getRandomInt from '../get-random.js';

const minFirstNumber = 1;
const maxFirstNumber = 20;

const progressionLength = 10;

const minStep = 1;
const maxStep = 10;

const gameRule = 'What number is missing in the progression?';

const generateQuestion = () => {
  const first = getRandomInt(minFirstNumber, maxFirstNumber);
  const step = getRandomInt(minStep, maxStep);
  const missingPosition = getRandomInt(0, progressionLength - 1);

  const sequence = [];
  let expectedAnswer;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingPosition) {
      expectedAnswer = String(first + i * step);
      sequence.push('..');
    } else {
      sequence.push(first + i * step);
    }
  }

  const question = sequence.join(' ');

  return [question, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
