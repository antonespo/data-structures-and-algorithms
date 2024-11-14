import { findMaxAverage, findRepeatedDnaSequences, getLongestSubstring, getLongestSubstringTwoDistinct } from './sliding-window';

describe('getLongestSubstring', () => {
  it.each([
    { input: 'abcabcbb', expected: 3 },
    { input: 'bbbbb', expected: 1 },
    { input: 'pwwkew', expected: 3 },
    { input: '', expected: 0 },
    { input: 'au', expected: 2 },
    { input: 'dvdf', expected: 3 },
    { input: 'abcdef', expected: 6 },
    { input: 'abba', expected: 2 }
  ])("should return $expected for input '$input'", ({ input, expected }) => {
    expect(getLongestSubstring(input)).toBe(expected);
  });
});

describe('getLongestSubstringTwoDistinct', () => {
  it.each([
    { input: 'eceba', expected: 3 },
    { input: 'ccaabbb', expected: 5 },
    { input: 'a', expected: 1 },
    { input: 'abc', expected: 2 },
    { input: '', expected: 0 },
    { input: 'aabbcc', expected: 4 },
    { input: 'abaccc', expected: 4 },
    { input: 'aaaaa', expected: 5 },
    { input: 'ababababab', expected: 10 },
    { input: 'abcabcabc', expected: 2 }
  ])("should return $expected for input '$input'", ({ input, expected }) => {
    expect(getLongestSubstringTwoDistinct(input)).toBe(expected);
  });
});

describe('findRepeatedDnaSequences', () => {
  it.each([
    {
      input: 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT',
      expected: ['AAAAACCCCC', 'CCCCCAAAAA']
    },
    {
      input: 'AAAAAAAAAAAAA',
      expected: ['AAAAAAAAAA']
    },
    {
      input: 'AAAAAAAAAA',
      expected: []
    },
    {
      input: 'ACGTACGTACGTACGT',
      expected: ['ACGTACGTAC', +'CGTACGTACG', +'GTACGTACGT']
    },
    {
      input: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
      expected: ['CCCCCCCCCC']
    },
    {
      input: '',
      expected: []
    },
    {
      input: 'A',
      expected: []
    }
  ])('should return $expected for input "$input"', ({ input, expected }) => {
    const result = findRepeatedDnaSequences(input);
    expect(result.sort()).toEqual(expected.sort());
  });
});

describe('findMaxAverage', () => {
  it.each([
    { nums: [1, 12, -5, -6, 50, 3], k: 4, expected: 12.75 },
    { nums: [5, 5, 5, 5, 5, 5], k: 2, expected: 5.0 },
    { nums: [0, 4, 0, 3, 2], k: 3, expected: 2.33 },
    { nums: [7, 4, 5, 1, 3, 9, 8, 6], k: 3, expected: 7.67 },
    { nums: [1, -1, -2, -3, -4], k: 1, expected: 1.0 },
    { nums: [10, 2, -10, 5, 20, -5], k: 3, expected: 6.67 },
    { nums: [1], k: 1, expected: 1.0 }
  ])('should return $expected for input nums: $nums with k: $k', ({ nums, k, expected }) => {
    expect(findMaxAverage(nums, k)).toBeCloseTo(expected, 2);
  });
});
