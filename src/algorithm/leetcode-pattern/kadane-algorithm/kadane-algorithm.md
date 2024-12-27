# Kadane's Algorithm

## Overview

Kadane's Algorithm is a dynamic programming approach used to find the maximum sum of a contiguous subarray within a one-dimensional numeric array. It is particularly useful for solving problems related to subarray sums efficiently. The algorithm can also be adapted to solve variations such as finding the maximum product of a subarray or the maximum sum of a circular subarray.

## How It Works

1. **Initialization**: Start by initializing two variables: one to track the maximum sum (or product) of the subarray ending at the current position, and another to track the overall maximum sum (or product) found so far.
2. **Iteration**: Iterate through the array, updating the current maximum based on the current element and the previous maximum.
3. **Update Global Maximum**: Continuously update the overall maximum based on the current maximum.
4. **Result**: The value of the overall maximum at the end of the iteration is the result.

## Common Use Cases

- **Maximum Sum Subarray**: Finding the maximum sum of a contiguous subarray.
- **Maximum Product Subarray**: Finding the maximum product of a contiguous subarray.
- **Circular Subarray**: Finding the maximum sum of a circular subarray.

## Pros and Cons

- **Pros**:
  - Efficient with a time complexity of O(n).
  - Simple to implement with minimal additional space required.
- **Cons**:
  - Limited to problems involving subarray sums or products.
  - May not work efficiently with certain constraints or variations.

## When to Use

Use Kadane's Algorithm when you need to find the maximum sum or product of a contiguous subarray in a one-dimensional array. It can also be adapted for circular subarrays and other variations.

## Additional Resources

- [LeetCode Problems on Kadane's Algorithm](https://leetcode.com/tag/dynamic-programming/)
