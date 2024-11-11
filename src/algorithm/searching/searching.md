# Searching Algorithms Report

## Overview

Searching algorithms are essential for finding specific data within a collection. Different algorithms are optimized for particular data types, input sizes, and levels of pre-sorting.

## 1. Linear Search

- **Description**: A straightforward algorithm that sequentially checks each element in a list until it finds the target value or reaches the end of the list.

- **Time Complexity**:

  - Best Case: O(1) (when the target is the first element)
  - Average Case: O(n)
  - Worst Case: O(n)

- **Space Complexity**: O(1)

- **Use Cases**: Useful for unsorted or small lists, as it does not require any preprocessing.

## 2. Binary Search

- **Description**: A more efficient search algorithm that works on sorted lists. Binary Search repeatedly divides the search interval in half, checking the middle element, and narrowing down the search based on comparisons.

- **Time Complexity**:

  - Best Case: O(1) (when the middle element is the target)
  - Average Case: O(log n)
  - Worst Case: O(log n)

- **Space Complexity**: O(1) for iterative, O(log n) for recursive

- **Use Cases**: Ideal for large, sorted lists due to its logarithmic efficiency.

## 3. Jump Search

- **Description**: Designed for sorted lists, Jump Search skips ahead by fixed steps, reducing the search space until a range where the target might exist is found. It then performs a linear search within this narrowed range.

- **Time Complexity**:

  - Best Case: O(1)
  - Average Case: O(√n)
  - Worst Case: O(√n)

- **Space Complexity**: O(1)

- **Use Cases**: Suitable for sorted lists when Binary Search is not optimal, such as on systems with limited memory or when random access is costly.
