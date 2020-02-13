const checkNumberIsEven = (number) => (number % 2 === 0);

const randomInt = (min = 1, max = 99) => (Math.floor(Math.random() * (max - min + 1)) + min);

export { checkNumberIsEven, randomInt };
