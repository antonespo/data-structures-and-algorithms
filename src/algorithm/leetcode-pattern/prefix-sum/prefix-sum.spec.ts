import { findMaxLength, pivotIndex, rangeSum, subarraySum } from './prefix-sum';

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
