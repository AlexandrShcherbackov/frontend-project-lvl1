import { arifmeticalProgression } from '../src/helpers/numbers';

describe('arifmeticalProgression', () => {
  test('should return array with progression of numbers', () => {
    expect(arifmeticalProgression(1, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
