import { checkNumberIsEven } from '../src/helpers/numbers';

describe('checkNumberIsEven', () => {
  test('should  return true if number is even', () => {
    expect(checkNumberIsEven(2)).toBeTruthy();
    expect(checkNumberIsEven(50)).toBeTruthy();
    expect(checkNumberIsEven(3)).toBeFalsy();
    expect(checkNumberIsEven(55)).toBeFalsy();
  });
});
