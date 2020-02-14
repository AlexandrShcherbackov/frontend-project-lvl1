import { smallestIntDivisior } from '../src/helpers/numbers';

describe('smalistIntDivisor', () => {
  test('should return smallest integer divisor of two numbers', () => {
    expect(smallestIntDivisior(50, 25)).toEqual(25);
    expect(smallestIntDivisior(25, 50)).toEqual(25);
    expect(smallestIntDivisior(3, 1)).toEqual(1);
  });
});
