# Backtracking

## Overview

Backtracking is a recursive pattern that explores all possible solutions by building candidates incrementally and abandoning a candidate ("backtracking") as soon as it determines that the candidate cannot be a solution.

## How It Works

1. Start with a potential solution and try to build on it recursively.
2. If a solution meets all criteria, mark it as valid.
3. If not, backtrack to the previous state and try a different path.

### Example Pseudo-Code

1. Define a recursive function that attempts a solution.
2. For each possible decision, call the function recursively.
3. If a decision is invalid, backtrack and try the next possibility.

## Common Use Cases

- Solving puzzles like Sudoku and N-Queens.
- Generating all subsets or permutations.
- Solving constraint-satisfaction problems.

## Pros and Cons

- **Pros**: Ensures all possible solutions are explored.
- **Cons**: Can be slow for large inputs due to exponential complexity.

## When to Use

Use Backtracking when you need to find all possible combinations or subsets, especially with constraint-based conditions.

## Additional Resources

- [LeetCode Problems on Backtracking](https://leetcode.com/tag/backtracking/)
