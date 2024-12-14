# Prefix Sum Pattern

## Overview

The Prefix Sum pattern is a foundational technique in algorithm design, particularly useful for solving problems related to arrays. It allows for efficient computation of cumulative data, such as sums over specific ranges, by preprocessing the input array. This approach significantly reduces time complexity for repetitive operations.

## How It Works

1. **Build the Prefix Sum Array**:

   - Create an array `prefixSum` where each element stores the cumulative sum up to that index.
   - The formula to compute the array is:
     ```
     prefixSum[i] = prefixSum[i-1] + nums[i] (for i > 0)
     prefixSum[0] = nums[0]
     ```

2. **Use the Prefix Sum for Range Queries**:

   - Once the `prefixSum` array is ready, the sum of elements between any two indices \(i\) and \(j\) can be computed in constant time:
     ```
     sum[i:j] = prefixSum[j] - prefixSum[i-1]
     ```

3. **Iterate Through the Input**:
   - For each query or condition, use the precomputed prefix sums to extract results without recalculating sums from scratch.

### Example Workflow

1. Compute the prefix sum array for `[1, 2, 3, 4]`:
   - Prefix sum array: `[1, 3, 6, 10]`
2. Find the sum of elements from index 1 to 3:
   - Sum = `prefixSum[3] - prefixSum[0] = 10 - 1 = 9`

## Common Use Cases

- **Subarray Sum Problems**: Count the number of subarrays that sum up to a specific value.
- **Range Queries**: Compute the sum of elements in a specified range repeatedly.
- **Pivot Index**: Locate the index where the sum of elements on the left equals the sum on the right.
- **Grid Problems**: Extend the prefix sum concept to 2D arrays to compute submatrix sums efficiently.

## When to Use

Use the Prefix Sum pattern when:

1. You need to perform frequent range queries over an array.
2. The operation involves addition or other commutative operations (e.g., sum, XOR).
3. Precomputing cumulative values can help eliminate redundant calculations.

Avoid using it for:

- Non-additive operations (e.g., finding the product of elements or non-linear operations).
- Scenarios where memory overhead is a critical constraint, as the prefix sum array requires additional storage.

## Additional Resources

- [LeetCode: Prefix Sum Problems](https://leetcode.com/tag/prefix-sum/)
