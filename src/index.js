import readlineSync from 'readline-sync';

const brainGames = (descrition, gameData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(descrition);

  const maxCall = 3;
  const iter = (count) => {
    const [currentInt, currentAnswer] = gameData();
    console.log(`Question: ${currentInt}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== currentAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${currentAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');

    if (count === maxCall) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    iter(count + 1);
  };

  return iter(1);
};

export default brainGames;
