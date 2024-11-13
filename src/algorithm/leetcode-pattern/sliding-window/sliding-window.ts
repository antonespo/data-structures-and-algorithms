/**
 * LeetCode Problem #3 - Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string `s`, this function finds the length of the longest substring
 * without repeating characters using the sliding window technique.
 *
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 *
 * @example
 * getLongestSubstring("abcabcbb"); // Returns 3, as "abc" is the longest substring without repeats.
 * getLongestSubstring("bbbbb"); // Returns 1, as "b" is the longest substring without repeats.
 * getLongestSubstring("pwwkew"); // Returns 3, as "wke" is the longest substring without repeats.
 *
 * This implementation uses a sliding window approach with a Set to track unique characters
 * within the current substring window. The window expands with the `end` pointer, and if a
 * duplicate is found, characters are removed from the start of the window (using the `start` pointer)
 * until all characters in the window are unique again.
 */
export const getLongestSubstring = (s: string): number => {
  let start = 0;
  let maxLength = 0;
  const set = new Set<string>();

  for (let end = 0; end < s.length; end++) {
    const element = s[end];

    while (set.has(element)) {
      set.delete(s[start]);
      start++;
    }

    set.add(element);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

/**
 * LeetCode Problem #159 - Longest Substring with At Most Two Distinct Characters
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 *
 * Given a string `s`, this function finds the length of the longest substring
 * that contains at most two distinct characters.
 *
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring with at most two distinct characters.
 *
 * @example
 * getLongestSubstringTwoDistinct("eceba"); // Returns 3, as "ece" is the longest substring with at most two distinct characters.
 * getLongestSubstringTwoDistinct("ccaabbb"); // Returns 5, as "aabbb" is the longest substring with at most two distinct characters.
 *
 * This implementation uses a sliding window technique with a Map to track character counts in the current substring window.
 * The `end` pointer expands the window, and when the window contains more than two distinct characters,
 * the `start` pointer adjusts by removing characters from the window until there are at most two distinct characters.
 */
export const getLongestSubstringTwoDistinct = (s: string): number => {
  let start = 0;
  let maxLength = 0;
  const charMap = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const element = s[end];
    charMap.set(element, (charMap.get(element) ?? 0) + 1);

    while (charMap.size > 2) {
      const startChar = s[start];
      charMap.set(startChar, charMap.get(startChar)! - 1);
      if (charMap.get(startChar) === 0) {
        charMap.delete(startChar);
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
