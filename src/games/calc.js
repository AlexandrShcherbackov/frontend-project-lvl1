import brainGames from '..';
import { randomInt } from '../helpers/numbers';

const gameDescription = 'What is the result of the expression?';
const operations = new Map([
  ['+', (a, b) => (a + b)],
  ['-', (a, b) => (a - b)],
  ['*', (a, b) => (a * b)],
]);

const operatoinSymbols = ['+', '-', '*'];

const calcGameData = () => {
  const [fistOperand, secondOperand] = [randomInt(), randomInt()];
  const operation = operatoinSymbols[randomInt(0, 2)];
  const answer = (operations.get(operation))(fistOperand, secondOperand);
  return [`${fistOperand} ${operation} ${secondOperand}`, `${answer}`];
};

export default () => (brainGames(gameDescription, calcGameData));
