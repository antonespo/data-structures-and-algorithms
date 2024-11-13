# Sliding Window

## Overview

The Sliding Window pattern is a commonly used approach to optimize the performance of algorithms that involve a subset of an array or list. It replaces a nested loop with a single loop by maintaining a "window" of elements, adjusting its boundaries as we iterate over the list.

## How It Works

1. Define a window size or set dynamic window boundaries.
2. Slide the window across the array, adjusting the elements within the window as needed (e.g., summing values, counting elements).
3. Update the result as each new window is evaluated.

### Example Pseudo-Code

1. Set an initial window boundary.
2. Iterate through the array, adjusting the window boundaries.
3. Process elements within the window and store/update the result.

## Common Use Cases

- Finding the maximum sum of a subarray of size `k`.
- Detecting the presence of a substring with certain properties.
- Solving for the longest substring that meets a specific condition.

## Pros and Cons

- **Pros**: Efficient for problems involving continuous subarrays or sublists.
- **Cons**: Generally limited to one-dimensional data structures (e.g., arrays, strings).

## When to Use

Use the Sliding Window pattern when the problem involves finding an optimal subset within a continuous sequence.

## Additional Resources

- [LeetCode Problems on Sliding Window](https://leetcode.com/tag/sliding-window/)
