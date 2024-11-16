import { maxArea, moveZeroes, reverseWords, twoSum, validPalindrome } from './two-pointers';

describe('moveZeroes', () => {
  it.each([
    [
      [0, 1, 0, 3, 12],
      [1, 3, 12, 0, 0]
    ],
    [
      [7, 0, 2, 0, 3],
      [7, 2, 3, 0, 0]
    ],
    [
      [0, 0, 1],
      [1, 0, 0]
    ],
    [
      [2, 1],
      [2, 1]
    ],
    [[0], [0]]
  ])('moveZeroes(%j) modifies nums to %j', (input, expected) => {
    const nums = [...input];
    moveZeroes(nums);
    expect(nums).toEqual(expected);
  });
});

describe('validPalindrome', () => {
  it.each([
    ['abca', true],
    ['racecar', true],
    ['hello', false],
    ['deeee', true],
    ['raceeicar', true]
  ])('validPalindrome("%s") should return %s', (input, expected) => {
    expect(validPalindrome(input)).toBe(expected);
  });
});

describe('reverseWords', () => {
  it.each([
    ["Let's take LeetCode contest", "s'teL ekat edoCteeL tsetnoc"],
    ['God Ding', 'doG gniD'],
    ['Hello World', 'olleH dlroW'],
    ['a b c', 'a b c']
  ])('reverseWords("%s") should return "%s"', (input, expected) => {
    expect(reverseWords(input)).toBe(expected);
  });
});

describe('twoSum', () => {
  it.each([
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
    [[2, 4, 6, 8, 10], 7, []]
  ])('twoSum(%j, %d) should return %j', (numbers, target, expected) => {
    expect(twoSum(numbers, target)).toEqual(expected);
  });
});

describe('maxArea', () => {
  it.each([
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[1, 1], 1],
    [[4, 3, 2, 1, 4], 16],
    [[1, 2, 1], 2]
  ])('maxArea(%j) should return %d', (heights, expected) => {
    expect(maxArea(heights)).toBe(expected);
  });
});
