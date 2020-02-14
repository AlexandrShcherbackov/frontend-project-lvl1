import { isPrime } from '../src/helpers/numbers';

describe('isPrime', () => {
  test('should return true if number is prime and false if number isn\'t prime', () => {
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(4)).toBeFalsy();
  })
});