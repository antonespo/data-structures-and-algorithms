/**
 * LeetCode Problem #303 - Range Sum Query - Immutable
 *
 * Computes the sum of elements in a given range [i, j] (inclusive).
 *
 * @param {number[]} nums - Array of integers.
 * @param {number} i - Start index.
 * @param {number} j - End index.
 * @returns {number} Sum of elements in range.
 *
 * @example
 * rangeSum([1,2,3,4,5], 0, 2); // Returns 6
 * rangeSum([1,2,3,4,5], 1, 3); // Returns 9
 *
 * @see https://leetcode.com/problems/range-sum-query-immutable/
 */
export function rangeSum(nums: number[], i: number, j: number): number {
  const prefixSum = [0];
  for (let idx = 0; idx < nums.length; idx++) {
    prefixSum[idx + 1] = prefixSum[idx] + nums[idx];
  }
  return prefixSum[j + 1] - prefixSum[i];
}

/**
 * LeetCode Problem #525 - Contiguous Array
 *
 * Finds the maximum length of a contiguous subarray with an equal number of 0's and 1's.
 *
 * @param {number[]} nums - A binary array where each element is either 0 or 1.
 * @returns {number} The maximum length of the contiguous subarray with an equal number of 0's and 1's.
 *
 * @example
 * findMaxLength([0,1]) // Returns 2
 * findMaxLength([0,1,0]) // Returns 2
 *
 * @see https://leetcode.com/problems/contiguous-array/
 */
export function findMaxLength(nums: number[]): number {
  // Hash map to store the first occurrence of a prefix sum
  const map = new Map<number, number>();
  map.set(0, -1); // Base case: a sum of 0 before any elements has an index of -1

  let prefixSum = 0; // The running prefix sum
  let maxLength = 0; // The maximum length of subarray found so far

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Adjust the prefix sum: treat 0 as -1 and 1 as 1
    prefixSum = prefixSum + (nums[i] === 0 ? -1 : 1);

    // If this prefix sum has been seen before, calculate the subarray length
    if (map.has(prefixSum)) {
      // The length of the subarray is the difference between the current index and the first occurrence of the prefix sum
      maxLength = Math.max(maxLength, i - map.get(prefixSum)!);
    } else {
      // Otherwise, store the first occurrence of this prefix sum
      map.set(prefixSum, i);
    }
  }

  return maxLength;
}

/**
 * LeetCode Problem #560 - Subarray Sum Equals K
 *
 * Computes the number of subarrays whose sum equals the given target.
 *
 * @param {number[]} nums - Array of integers.
 * @param {number} k - Target sum.
 * @returns {number} Number of subarrays whose sum equals `k`.
 *
 * @example
 * subarraySum([1,1,1], 2); // Returns 2
 * subarraySum([1,2,3], 3); // Returns 2
 *
 * @see https://leetcode.com/problems/subarray-sum-equals-k/
 */
export function subarraySum(nums: number[], k: number): number {
  const prefixMap = new Map<number, number>();
  prefixMap.set(0, 1);
  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;
    if (prefixMap.has(prefixSum - k)) {
      count += prefixMap.get(prefixSum - k)!;
    }
    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
  }
  return count;
}

/**
 * LeetCode Problem #724 - Find Pivot Index
 *
 * Finds the pivot index where the sum of elements on the left equals the sum on the right.
 *
 * @param {number[]} nums - Array of integers.
 * @returns {number} Pivot index or -1 if none exists.
 *
 * @example
 * pivotIndex([1,7,3,6,5,6]); // Returns 3
 * pivotIndex([1,2,3]); // Returns -1
 *
 * @see https://leetcode.com/problems/find-pivot-index/
 */
export function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}
