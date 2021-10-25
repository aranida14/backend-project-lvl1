import game from '../index.js';
import getRandomInt from '../get-random.js';

const progressionLength = 10;

const generateProgression = (first, step) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(first + i * step);
  }

  return progression;
};

const gameRule = 'What number is missing in the progression?';

const generateQuestion = () => {
  const first = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const missingPosition = getRandomInt(0, progressionLength - 1);

  const progression = generateProgression(first, step);

  const expectedAnswer = String(progression.splice(missingPosition, 1, '..'));

  const question = progression.join(' ');

  return [question, expectedAnswer];
};

export default () => game(gameRule, generateQuestion);
