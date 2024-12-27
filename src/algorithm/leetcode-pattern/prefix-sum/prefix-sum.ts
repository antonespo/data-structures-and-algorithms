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
  let maxLength = 0; // The maximum length of subarray found so far
  let prefixSum = 0; // The running prefix sum, adjusted as we go through the array

  // Hash map to store the first occurrence of a prefix sum.
  // Key: prefixSum, Value: index of the first occurrence of that prefixSum
  const map = new Map<number, number>();

  // Initialize the map with a prefix sum of 0 at index -1 to handle edge cases
  // where the subarray starts from the very beginning of the array.
  map.set(prefixSum, -1);

  // Iterate through the array to calculate the maximum length of subarrays
  // with an equal number of 1s and 0s.
  for (let i = 0; i < nums.length; i++) {
    // Adjust the prefix sum:
    // Treat 0 as -1 and 1 as 1. This way, the problem becomes finding a subarray
    // whose sum is 0 (i.e., the difference between the number of 1s and 0s is zero).
    prefixSum += nums[i] === 0 ? -1 : 1;

    // Check if this prefix sum has been encountered before.
    // If it has, it means there's a subarray between the previous index and the
    // current index where the sum is zero (the number of 1s equals the number of 0s).
    if (map.has(prefixSum)) {
      // Calculate the length of the subarray.
      // The subarray length is the difference between the current index and the index
      // of the first occurrence of the same prefix sum.
      maxLength = Math.max(maxLength, i - map.get(prefixSum)!);
    } else {
      // Otherwise, store the first occurrence of this prefix sum in the map.
      map.set(prefixSum, i);
    }
  }

  // Return the maximum length of subarray found
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
  let count = 0; // Initialize the count of subarrays whose sum equals k
  let prefixSum = 0; // Running sum of elements as we iterate through the array

  // Hash map to store the prefix sum and its frequency of occurrence
  // We initialize the map with prefixSum = 0 having a frequency of 1
  // This accounts for the case where a prefix sum equals k at the start of the array
  const map = new Map<number, number>();
  map.set(prefixSum, 1);

  // Iterate through each number in the array
  for (const num of nums) {
    prefixSum += num; // Update the running prefix sum by adding the current element

    // If (prefixSum - k) exists in the map, it means there is a subarray
    // whose sum equals k, starting from some previous index to the current index.
    // We add the frequency of (prefixSum - k) to the count
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k)!;
    }

    // Update the map with the current prefix sum.
    // If the prefixSum has been seen before, increment its count.
    // Otherwise, initialize it to 1 (this is the first occurrence).
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  // Return the total count of subarrays whose sum equals k
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

/**
 * LeetCode Problem #53 - Maximum Subarray
 *
 * Finds the maximum sum of a contiguous subarray within a one-dimensional numeric array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} - The maximum sum of a contiguous subarray.
 *
 * @example
 * maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // Returns 6, as [4,-1,2,1] has the largest sum.
 *
 * This implementation uses a dynamic programming approach to track the maximum sum of subarrays
 * ending at each position and the overall maximum sum found so far.
 *
 * @see https://leetcode.com/problems/maximum-subarray/
 */
export function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  let prefixSum = 0;
  let minPrefixSum = 0;

  for (const num of nums) {
    prefixSum = prefixSum + num;
    max = Math.max(max, prefixSum - minPrefixSum);
    minPrefixSum = Math.min(minPrefixSum, prefixSum);
  }

  return max;
}
