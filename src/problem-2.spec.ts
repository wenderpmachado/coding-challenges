import { rotate } from './problem-2';

describe('problem-2', () => {
  it('Example 1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    const result = rotate(nums, k);

    expect(result).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('Example 2', () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;

    const result = rotate(nums, k);

    expect(result).toStrictEqual([3, 99, -1, -100]);
  });
});
