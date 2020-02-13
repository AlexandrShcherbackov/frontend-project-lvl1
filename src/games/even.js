import brainGames from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumberIsEven = (number) => (number % 2 === 0);

const randomInt = (min = 1, max = 99) => (Math.floor(Math.random() * (max - min + 1)) + min);

const evenGameData = () => {
  const question = randomInt();
  const answer = checkNumberIsEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => (brainGames(gameDescription, evenGameData));
