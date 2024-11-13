import { getLongestSubstring, getLongestSubstringTwoDistinct } from './sliding-window';

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
