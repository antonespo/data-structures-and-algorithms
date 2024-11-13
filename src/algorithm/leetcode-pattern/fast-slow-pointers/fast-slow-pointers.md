# Fast & Slow Pointers

## Overview

The Fast & Slow Pointers pattern (also known as the Tortoise and Hare) is used to detect cycles within data structures, such as linked lists. The approach involves two pointers moving at different speeds.

## How It Works

1. Initialize two pointers, one moving twice as fast as the other.
2. Move both pointers through the data structure.
3. If the fast pointer catches up to the slow pointer, a cycle exists.

### Example Pseudo-Code

1. Initialize `fast` and `slow` pointers at the start of the list.
2. Move `slow` by one step and `fast` by two steps in each iteration.
3. Check if `fast` meets `slow` to detect a cycle.

## Common Use Cases

- Detecting cycles in linked lists.
- Finding the start of a loop in circular arrays or linked lists.
- Calculating the midpoint of a list.

## Pros and Cons

- **Pros**: Efficient for problems requiring cycle detection in linear data structures.
- **Cons**: Limited applicability outside cycle detection.

## When to Use

Use Fast & Slow Pointers when the problem requires detecting cycles or identifying repeated patterns in a sequence.

## Additional Resources

- [LeetCode Problems on Fast & Slow Pointers](https://leetcode.com/tag/linked-list/)
