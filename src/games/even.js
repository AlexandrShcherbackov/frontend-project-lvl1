import brainGames from '..';
import { checkNumberIsEven, randomInt } from '../helpers/numbers';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGameData = () => {
  const question = randomInt();
  const answer = checkNumberIsEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => (brainGames(gameDescription, evenGameData));
