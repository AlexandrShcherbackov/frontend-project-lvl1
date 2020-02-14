import brainGames from '..';
import { randomInt, arifmeticalProgression } from '../helpers/numbers';

const description = 'What number is missing in the progression?';

const progressinData = () => {
  const [start, depth] = [randomInt(), randomInt()];
  const progresson = arifmeticalProgression(start, depth);
  const answer = progresson.splice(randomInt(0, 9), 1, '..');

  return [progresson, `${answer}`];
};

export default () => (brainGames(description, progressinData));
