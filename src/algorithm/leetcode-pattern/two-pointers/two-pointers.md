# Two Pointers

## Overview

The Two Pointers pattern is a versatile approach to solve problems that involve searching for pairs, partitions, or sequences in a sorted or unsorted array. By leveraging two pointers that move through the array based on certain conditions, this pattern can optimize algorithms, often reducing the time complexity from \(O(n^2)\) to \(O(n)\).

## How It Works

1. **Initialize Two Pointers**: Typically, one starts at the beginning and the other at the end of the array. Alternatively, both may start from the same point and move independently.
2. **Move Pointers Based on Conditions**: Adjust the pointers inward, outward, or independently based on problem-specific rules (e.g., to narrow a search range or find a pair).
3. **Process Data**: At each step, evaluate the elements at the pointer positions and update the result if conditions are met.

### Example Pseudo-Code

```text
Set left = 0, right = array.length - 1
While left < right:
    If condition is met:
        Process the pair (array[left], array[right])
    Adjust pointers:
        - Increment left
        - Decrement right
```

## Common Use Cases

- **Pair Problems**: Finding two numbers in a sorted array that add up to a target sum.
- **Palindrome Checking**: Validating if a string reads the same forward and backward.
- **Partitioning Arrays**: Separating even and odd numbers, positive and negative values, etc.
- **Merging Sorted Arrays**: Efficiently combining two sorted lists into one.

## Pros and Cons

- **Pros**:
  - Reduces the need for nested loops, improving efficiency.
  - Simple to implement and adaptable to various problems.
- **Cons**:
  - Typically works only on problems that involve sequences or pairs.
  - Requires careful pointer management to avoid logical errors.

## When to Use

Use the Two Pointers pattern when the problem involves linear structures (e.g., arrays or strings) and can be solved by narrowing a search space or processing pairs of elements.

## Additional Resources

- [LeetCode Problems on Two Pointers](https://leetcode.com/tag/two-pointers/)
