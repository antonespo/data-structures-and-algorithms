import { combinationSum, partition, permute, subsets } from './backtracking';

describe('subsets', () => {
  it.each([
    [
      [1, 2],
      [[], [1], [2], [1, 2]]
    ],
    [
      [1, 2, 3],
      [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    ],
    [[], [[]]]
  ])('subsets(%j) should return %j', (input, expected) => {
    expect(subsets(input)).toEqual(expect.arrayContaining(expected));
  });
});

describe('permute', () => {
  it.each([
    [
      [1, 2],
      [
        [1, 2],
        [2, 1]
      ]
    ],
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ]
    ],
    [[], [[]]]
  ])('permute(%j) should return %j', (input, expected) => {
    expect(permute(input)).toEqual(expect.arrayContaining(expected));
  });
});

describe('combinationSum', () => {
  it.each([
    { candidates: [2, 3, 6, 7], target: 7, expected: [[2, 2, 3], [7]] },
    {
      candidates: [2, 3, 5],
      target: 8,
      expected: [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
      ]
    },
    { candidates: [2], target: 1, expected: [] },
    { candidates: [1], target: 1, expected: [[1]] },
    { candidates: [1], target: 2, expected: [[1, 1]] }
  ])('combinationSum($candidates, $target) should return $expected', ({ candidates, target, expected }) => {
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(result));
  });
});

describe('partition', () => {
  it.each([
    {
      input: 'aab',
      expected: [
        ['a', 'a', 'b'],
        ['aa', 'b']
      ]
    },
    { input: 'a', expected: [['a']] },
    {
      input: 'racecar',
      expected: [['r', 'a', 'c', 'e', 'c', 'a', 'r'], ['r', 'a', 'cec', 'a', 'r'], ['r', 'aceca', 'r'], ['racecar']]
    },
    { input: 'ab', expected: [['a', 'b']] },
    { input: '', expected: [[]] }
  ])('partition($input) should return $expected', ({ input, expected }) => {
    const result = partition(input);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(result));
  });
});
