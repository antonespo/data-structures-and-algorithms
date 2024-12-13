/**
 * LeetCode Problem #3 - Longest Substring Without Repeating Characters
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
 *
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
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
 *
 * @see https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
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

/**
 * LeetCode Problem #187 - Repeated DNA Sequences
 *
 * Finds all 10-letter-long sequences (substrings) in a DNA sequence that appear more than once.
 * DNA sequences are represented by strings of nucleotides using the characters 'A', 'C', 'G', and 'T'.
 *
 * This function scans the DNA sequence to identify repeated substrings of length 10
 * and returns a list of all such substrings that appear more than once.
 *
 * @param {string} s - A string representing a DNA sequence, consisting only of characters 'A', 'C', 'G', and 'T'.
 * @returns {string[]} An array of 10-character-long substrings that occur more than once in the input string `s`.
 *
 * @example
 * findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"); // Returns ["AAAAACCCCC", "CCCCCAAAAA"] for input "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT".
 * findRepeatedDnaSequences("AAAAAAAAAAAAA"); // Returns ["AAAAAAAAAA"] for input "AAAAAAAAAAAAA".
 *
 * - The function leverages a sliding window approach to traverse the DNA sequence and keep track of each
 *   10-character sequence's occurrence using a set.
 * - The DNA sequence `s` may contain letters beyond 10 characters, and only repeated sequences are returned.
 *
 * @see https://leetcode.com/problems/repeated-dna-sequences/
 */
export function findRepeatedDnaSequences(s: string): string[] {
  const fixedWindowSize = 10;
  if (s.length < fixedWindowSize) return []; // Handle short strings

  const map = new Set<string>();
  const repeatedSequences = new Set<string>();

  for (let start = 0; start <= s.length - fixedWindowSize; start++) {
    const element = s.slice(start, start + fixedWindowSize);

    if (map.has(element)) {
      repeatedSequences.add(element);
    } else {
      map.add(element);
    }
  }

  return Array.from(repeatedSequences);
}

/**
 * LeetCode Problem #643 - Maximum Average Subarray I
 *
 * Given an integer array `nums` and an integer `k`, find the contiguous subarray of length `k`
 * that has the maximum average value and return that maximum average.
 *
 * This function uses a sliding window approach with a fixed window size `k` to find the maximum
 * sum of any contiguous subarray of length `k`, then returns the average by dividing the max sum by `k`.
 *
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The length of the subarray for which the maximum average is to be found.
 * @returns {number} The maximum average of any subarray of length `k`.
 *
 * @example
 * findMaxAverage([1, 12, -5, -6, 50, 3], 4); // Returns 12.75, the average of subarray [12, -5, -6, 50].
 *
 * - This function calculates the initial sum of the first `k` elements.
 * - It then slides the window by adding the next element in the array and subtracting the element
 *   that’s left behind, updating the maximum sum when necessary.
 *
 * @see https://leetcode.com/problems/maximum-average-subarray-i/
 */
export function findMaxAverage(nums: number[], k: number): number {
  let average = nums.slice(0, k).reduce((p, acc) => (acc += p), 0) / k;
  let maxAverage = average;

  for (let i = 0; i < nums.length - k; i++) {
    average = (average * k - nums[i] + nums[i + k]) / k;
    maxAverage = Math.max(maxAverage, average);
  }
  return maxAverage;
}

/**
 * LeetCode Problem #209 - Minimum Size Subarray Sum
 *
 * Finds the minimal length of a contiguous subarray of which the sum is greater than
 * or equal to a given target. If no such subarray exists, returns 0.
 *
 * This function uses a sliding window approach to efficiently find the smallest
 * subarray that meets the condition.
 *
 * @param {number} target - The target sum.
 * @param {number[]} nums - The input array of integers.
 * @returns {number} The length of the smallest subarray, or 0 if no such subarray exists.
 *
 * @example
 * minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); // Returns 2, as [4, 3] is the smallest subarray with sum >= 7.
 * minSubArrayLen(4, [1, 4, 4]); // Returns 1, as [4] is the smallest subarray with sum >= 4.
 * minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]); // Returns 0, as no subarray meets the condition.
 *
 * @see https://leetcode.com/problems/minimum-size-subarray-sum/
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let start = 0;
  let windowSum = 0;
  let minWindow = Infinity;

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    // Shrink the window while the current sum meets or exceeds the target.
    while (windowSum >= target) {
      minWindow = Math.min(minWindow, end - start + 1);
      windowSum -= nums[start];
      start++;
    }
  }

  return minWindow === Infinity ? 0 : minWindow;
}
