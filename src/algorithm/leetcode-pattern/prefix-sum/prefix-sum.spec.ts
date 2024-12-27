import { findMaxLength, maxSubArray, pivotIndex, rangeSum, subarraySum } from './prefix-sum';

describe('rangeSum', () => {
  it.each([
    [[1, 2, 3, 4], 0, 2, 6],
    [[1, 2, 3, 4], 1, 3, 9],
    [[1, 2, 3, 4], 0, 0, 1],
    [[1, 2, 3, 4], 3, 3, 4]
  ])('rangeSum(%j, %d, %d) should return %d', (nums, i, j, expected) => {
    expect(rangeSum(nums, i, j)).toBe(expected);
  });
});

describe('findMaxLength', () => {
  it.each([
    [[0, 1], 2],
    [[0, 1, 0], 2],
    [[1, 0, 0, 1], 4],
    [[1, 1, 0, 0, 1, 1], 4],
    [[0, 0, 0, 0, 0], 0],
    [[1, 1, 1, 1, 1], 0],
    [[], 0],
    [[0, 1, 1, 0, 0, 1], 6],
    [[0, 1, 0, 1, 1], 4]
  ])('given %p as input, returns %p', (nums, expected) => {
    expect(findMaxLength(nums)).toBe(expected);
  });
});

describe('subarraySum', () => {
  it.each([
    [[1, 1, 1], 2, 2],
    [[1, 2, 3], 3, 2],
    [[-1, -1, 1], 0, 1],
    [[1], 1, 1],
    [[], 0, 0]
  ])('subarraySum(%j, %d) should return %d', (nums, target, expected) => {
    expect(subarraySum(nums, target)).toBe(expected);
  });
});

describe('pivotIndex', () => {
  it.each([
    [[1, 7, 3, 6, 5, 6], 3],
    [[1, 2, 3], -1],
    [[2, 1, -1], 0],
    [[0, 0, 0, 0, 1], 4]
  ])('pivotIndex(%j) should return %d', (nums, expected) => {
    expect(pivotIndex(nums)).toBe(expected);
  });
});

describe('maxSubArray', () => {
  it.each([
    { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { input: [1], expected: 1 },
    { input: [5, 4, -1, 7, 8], expected: 23 },
    { input: [-1, -2, -3, -4], expected: -1 },
    { input: [8, -19, 5, -4, 20], expected: 21 },
    { input: [1, 2, 3, 4, 5], expected: 15 },
    { input: [-2, -3, 4, -1, -2, 1, 5, -3], expected: 7 }
  ])("should return $expected for input '$input'", ({ input, expected }) => {
    expect(maxSubArray(input)).toBe(expected);
  });
});
