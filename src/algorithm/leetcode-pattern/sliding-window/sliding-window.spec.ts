import {
  findMaxAverage,
  findRepeatedDnaSequences,
  getLongestSubstring,
  getLongestSubstringTwoDistinct,
  longestSubarray,
  minSubArrayLen
} from './sliding-window';

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

describe('longestSubarray', () => {
  it.each([
    [[1, 2, 3, 4], 5, 2], // Example 1: Longest subarray with sum <= 5
    [[1, 1, 1, 1], 2, 2], // Example 2: Longest subarray with sum <= 2
    [[10, 2, 3, 1, 4], 7, 3], // Example 3: Longest subarray with sum <= 7
    [[1, 1, 1, 1, 1], 5, 5], // Example 4: Longest subarray with sum <= 5
    [[], 5, 0] // Example 5: Empty array
  ])('should return the correct result for nums = %p and target = %d', (nums, k, expected) => {
    expect(longestSubarray(nums, k)).toBe(expected);
  });
});

describe('minSubArrayLen', () => {
  it.each([
    [7, [2, 3, 1, 2, 4, 3], 2], // Standard case
    [4, [1, 4, 4], 1], // Single element satisfies target
    [11, [1, 2, 3, 4, 5], 3], // Smallest subarray [4, 5]
    [15, [1, 2, 3, 4, 5], 5], // Whole array required
    [20, [1, 2, 3, 4, 5], 0], // No subarray meets the condition
    [7, [], 0] // Empty array
  ])('returns the minimum subarray length for target=%i and nums=%p', (target, nums, expected) => {
    const result = minSubArrayLen(target, nums);
    expect(result).toBe(expected);
  });

  it('handles edge case with large input', () => {
    const largeArray = Array(100000).fill(1);
    const target = 50000;
    expect(minSubArrayLen(target, largeArray)).toBe(50000);
  });

  it('handles case where target is larger than all sums combined', () => {
    expect(minSubArrayLen(100, [1, 2, 3])).toBe(0);
  });
});
