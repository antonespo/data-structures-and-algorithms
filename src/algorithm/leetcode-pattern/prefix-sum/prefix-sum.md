# Prefix Sum Pattern

## Overview

The Prefix Sum pattern is a foundational technique in algorithm design, particularly useful for solving problems related to arrays. It allows for efficient computation of cumulative data, such as sums over specific ranges, by preprocessing the input array. This approach significantly reduces time complexity for repetitive operations.

The pattern can be implemented using either an array or a hash map to store the cumulative sums (prefix sums), depending on the problem's needs.

## How It Works

1. **Build the Prefix Sum Array or Map**:

   - **Array**: Create an array where each element stores the cumulative sum up to that index.
   - **Hash Map**: Alternatively, use a hash map where each key represents a unique cumulative sum and the value stores the number of times that sum has occurred. This can help in problems where you need to efficiently count subarrays or ranges with a specific sum.

2. **Use the Prefix Sum for Range Queries**:

   - Once the prefix sum (array or map) is ready, you can compute the sum of elements between any two indices in constant time.

3. **Iterate Through the Input**:

   - For each query or condition, use the precomputed prefix sums (whether in an array or map) to extract results without recalculating sums from scratch.

## Common Use Cases

- **Subarray Sum Problems**: Count the number of subarrays that sum up to a specific value using either an array or a map to track prefix sums.
- **Range Queries**: Efficiently compute the sum of elements in a specified range using the prefix sum array or map.
- **Pivot Index**: Locate the index where the sum of elements on the left equals the sum on the right.
- **Grid Problems**: Extend the prefix sum concept to 2D arrays (grids) to compute submatrix sums efficiently.

## When to Use

Use the Prefix Sum pattern when:

1. **Frequent Range Queries**: You need to perform frequent range sum queries over an array or subarrays.
2. **Commutative Operations**: The operation involves addition, XOR, or other commutative operations that are efficiently supported by prefix sums.
3. **Efficient Computation of Cumulative Values**: When precomputing cumulative sums or other values can help eliminate redundant calculations.

## Advantages

- **Time Complexity**: O(n), where `n` is the length of the array. The entire array is processed once, and the operations (insertion and lookup in the array or map) are O(1) on average.
- **Space Complexity**: O(n), due to the storage required for the prefix sum array or hash map.

## Limitations

- **Memory Usage**: The map or array introduces additional memory overhead. In the worst case, the map may store every unique prefix sum encountered.
- **Not Suitable for Non-Additive Operations**: This technique is designed for problems involving **additive operations** (e.g., sum or XOR). It is not efficient for **non-commutative** operations like multiplication or division.

## Additional Resources

- [LeetCode: Prefix Sum Problems](https://leetcode.com/tag/prefix-sum/)
