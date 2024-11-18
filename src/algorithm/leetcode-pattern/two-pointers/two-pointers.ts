import { quickSort } from '../../sorting/sorting';

/**
 * LeetCode Problem #283 - Move Zeroes
 *
 * Moves all 0's to the end of the array while maintaining the relative order of the non-zero elements.
 *
 * This function modifies the input array in place and uses the two-pointer technique.
 *
 * @param {number[]} nums - An array of integers.
 * @returns {void} Does not return anything; modifies `nums` in place.
 *
 * @example
 * moveZeroes([0,1,0,3,12]); // Modifies nums to [1,3,12,0,0]
 * moveZeroes([0,0,1]); // Modifies nums to [1,0,0]
 *
 * @see https://leetcode.com/problems/move-zeroes/
 */
export function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 1;

  while (left < right && right < nums.length) {
    if (nums[left] === 0 && nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    } else if (nums[left] !== 0 && nums[right] !== 0) {
      left++;
    } else if (nums[left] === 0 && nums[right] === 0) {
      right++;
    } else if (nums[left] !== 0 && nums[right] === 0) {
      left++;
      right++;
    }
  }
}

/**
 * LeetCode Problem #680 - Valid Palindrome II
 *
 * Determines if a string can become a palindrome by removing at most one character.
 *
 * This function uses two pointers to validate palindromic properties with one possible deletion.
 *
 * @param {string} s - A string of lowercase letters.
 * @returns {boolean} True if the string can be a palindrome with at most one deletion, otherwise false.
 *
 * @example
 * validPalindrome("abca"); // Returns true (remove 'b' or 'c')
 * validPalindrome("racecar"); // Returns true (already a palindrome)
 *
 * @see https://leetcode.com/problems/valid-palindrome-ii/
 */
export function validPalindrome(s: string): boolean {
  const isPalindrome = (left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping either the left or right character, then it must be a palindrome (skip at most 1 character)
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

/**
 * LeetCode Problem #557 - Reverse Words in a String III
 *
 * Reverses the characters of each word in a sentence while preserving whitespace and word order.
 *
 * This function uses two pointers to reverse characters in each word.
 *
 * @param {string} s - A string containing words separated by spaces.
 * @returns {string} A string where each word's characters are reversed.
 *
 * @example
 * reverseWords("Let's take LeetCode contest"); // Returns "s'teL ekat edoCteeL tsetnoc"
 * reverseWords("God Ding"); // Returns "doG gniD"
 *
 * @see https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
export function reverseWords(s: string): string {
  let chars = s.split(''); // Convert the string to a character array
  let start = 0;

  const reverseWord = (left: number, right: number, chars: string[]) => {
    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  };

  for (let end = 0; end <= chars.length; end++) {
    if (end === chars.length || chars[end] === ' ') {
      reverseWord(start, end - 1, chars);

      start = end + 1; // Update start to the next word
    }
  }

  return chars.join(''); // Convert the character array back to a string
}

/**
 * LeetCode Problem #167 - Two Sum II - Input Array Is Sorted
 *
 * Finds two numbers in a sorted array such that their sum equals a given target.
 *
 * Uses the two-pointer technique to find the solution in linear time.
 *
 * @param {number[]} numbers - A sorted array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} Indices of the two numbers (1-indexed).
 *
 * @example
 * twoSum([2, 7, 11, 15], 9); // Returns [1, 2]
 * twoSum([2, 3, 4], 6); // Returns [1, 3]
 *
 * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }

  return [];
}

/**
 * LeetCode Problem #11 - Container With Most Water
 *
 * Calculates the maximum amount of water a container can hold, given an array
 * of heights where the width between two lines is the index difference.
 *
 * This function uses the two-pointer technique to optimize the calculation.
 *
 * @param {number[]} height - An array of non-negative integers representing the heights of lines.
 * @returns {number} The maximum water that can be contained.
 *
 * @example
 * maxArea([1,8,6,2,5,4,8,3,7]); // Returns 49
 * maxArea([1,1]); // Returns 1
 *
 * @see https://leetcode.com/problems/container-with-most-water/
 */
export function maxArea(height: number[]): number {
  const computeArea = (left: number, right: number) => (right - left) * Math.min(height[left], height[right]);
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Compute the area for the current pair of pointers
    maxWater = Math.max(maxWater, computeArea(left, right));

    // Move the pointer with the shorter height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

/**
 * Removes duplicates from a sorted array in place, returning the length of the unique elements.
 *
 * @param {number[]} nums - The sorted array.
 * @returns {number} The length of the array with unique elements.
 *
 * @example
 * removeDuplicates([1,1,2]); // Returns 2 and modifies nums to [1,2,_]
 * removeDuplicates([0,0,1,1,1,2,2,3,3,4]); // Returns 5 and modifies nums to [0,1,2,3,4,_]
 *
 * @see https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let left = 0; // Pointer for the position of the last unique element.
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left++; // Move the left pointer to the next position for a unique value.
      nums[left] = nums[right]; // Overwrite the next position with the unique value.
    }
  }
  return left + 1; // Length of unique elements.
}

/**
 * Finds all unique triplets in the array that sum to zero.
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number[][]} An array of unique triplets that sum to zero.
 *
 * @example
 * threeSum([-1, 0, 1, 2, -1, -4]); // Returns [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([]); // Returns []
 *
 * @see https://leetcode.com/problems/3sum/
 */
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let a = 0; a < nums.length - 2; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;

    let left = a + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[a] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[a], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
