import brainGames from '..';
import { randomInt, smallestIntDivisior } from '../helpers/numbers';

const description = 'Find the greatest common divisor of given numbers.';

const smalestDivisorData = () => {
  const [first, second] = [randomInt(), randomInt()];
  const answer = smallestIntDivisior(first, second);

  return [`${first} ${second}`, `${answer}`];
};

export default () => (brainGames(description, smalestDivisorData));
