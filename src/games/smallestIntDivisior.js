import brainGames from '..';
import { randomInt } from '../helpers/numbers';

const description = 'Find the greatest common divisor of given numbers.';

const smalistIntDivisor = (numA, numB) => {
  const numberA = numA > numB ? numA : numB;
  const numberB =  numA > numB ? numB : numA;

  const iter = (divisor) => {
    if (numberA % divisor === 0) {
      return divisor;
    }

    return iter(divisor - 1);
  }

  return iter(numberB);
}

const smalestDivisorData = () => {
  const [first, second] = [randomInt(), randomInt()];
  const answer = smalistIntDivisor(first, second);

  return [`${first} ${second}`, answer];
}

export default () => (brainGames(description, smalestDivisorData));