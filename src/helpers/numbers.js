const checkNumberIsEven = (number) => (number % 2 === 0);

const randomInt = (min = 1, max = 99) => (Math.floor(Math.random() * (max - min + 1)) + min);

const smallestIntDivisior = (numA, numB) => {
  const numberA = numA > numB ? numA : numB;
  const numberB = numA > numB ? numB : numA;

  const iter = (divisor) => {
    if (numberA % divisor === 0) {
      return divisor;
    }

    return iter(divisor - 1);
  };

  return iter(numberB);
};

const arifmeticalProgression = (start, depth, maxLength = 10) => {
  const progression = [start];
  const iter = (acc) => {
    if (acc.length >= maxLength) {
      return acc;
    }

    const newIndex = acc.length;
    const newItem = start + newIndex * depth;
    const newProgresion = [].concat(acc, newItem);

    return iter(newProgresion);
  };

  return iter(progression);
};

export {
  checkNumberIsEven, randomInt, smallestIntDivisior, arifmeticalProgression,
};
