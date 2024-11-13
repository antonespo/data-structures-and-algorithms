# Two Pointers

## Overview

The Two Pointers pattern involves using two indices that move towards each other, either from the beginning and end of a list or array or both from the same end but with different speeds.

## How It Works

1. Place two pointers at specified positions (e.g., start and end of an array).
2. Move the pointers towards each other based on conditions.
3. Check or update the state as the pointers move to find the solution.

### Example Pseudo-Code

1. Initialize two pointers at the beginning and end of the array.
2. Use conditions to move each pointer accordingly.
3. Return or update results based on the state of pointers.

## Common Use Cases

- Finding pairs in a sorted array that sum to a specific target.
- Determining if an array is a palindrome.
- Partitioning arrays or subarrays based on a condition.

## Pros and Cons

- **Pros**: Reduces complexity for problems involving sorted arrays or sequences.
- **Cons**: Limited use cases for unsorted data unless pre-sorted.

## When to Use

Use Two Pointers for problems involving pairs or symmetry, especially when a sorted array is involved.

## Additional Resources

- [LeetCode Problems on Two Pointers](https://leetcode.com/tag/two-pointers/)
