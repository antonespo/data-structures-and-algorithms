/**
 * Kadane's Algorithm
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
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

/**
 * LeetCode Problem #152 - Maximum Product Subarray
 *
 * Finds the maximum product of a contiguous subarray within a one-dimensional numeric array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} - The maximum product of a contiguous subarray.
 *
 * @example
 * maxProduct([2,3,-2,4]); // Returns 6, as [2,3] has the largest product.
 *
 * This implementation uses a dynamic programming approach to track the maximum and minimum products
 * of subarrays ending at each position and the overall maximum product found so far.
 *
 * @see https://leetcode.com/problems/maximum-product-subarray/
 */
export function maxProduct(nums: number[]): number {
  let maxCurrent = nums[0];
  let minCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxCurrent, minCurrent] = [minCurrent, maxCurrent];
    }
    maxCurrent = Math.max(nums[i], maxCurrent * nums[i]);
    minCurrent = Math.min(nums[i], minCurrent * nums[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

/**
 * LeetCode Problem #918 - Maximum Sum Circular Subarray
 *
 * Finds the maximum sum of a circular subarray within a one-dimensional numeric array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @returns {number} - The maximum sum of a circular subarray.
 *
 * @example
 * maxSubarraySumCircular([1,-2,3,-2]); // Returns 3, as [3] has the largest sum.
 *
 * This implementation uses Kadane's Algorithm to find the maximum sum of a non-circular subarray
 * and the minimum sum of a non-circular subarray, then computes the maximum sum of a circular subarray.
 *
 * @see https://leetcode.com/problems/maximum-sum-circular-subarray/
 */
export function maxSubarraySumCircular(nums: number[]): number {
  const maxKadane = maxSubArray(nums);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    nums[i] = -nums[i];
  }
  const maxWrap = total + maxSubArray(nums);
  return maxWrap > maxKadane && maxWrap !== 0 ? maxWrap : maxKadane;
}
