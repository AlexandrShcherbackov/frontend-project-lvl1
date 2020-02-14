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

export { checkNumberIsEven, randomInt, smallestIntDivisior };
