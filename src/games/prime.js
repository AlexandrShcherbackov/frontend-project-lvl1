import brainGames from '..';
import { randomInt, isPrime } from '../helpers/numbers';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeData = () => {
  const question = randomInt(1, 500);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => (brainGames(description, primeData));
