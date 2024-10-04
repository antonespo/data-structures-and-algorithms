# Sorting Algorithms Report

## Overview

Sorting algorithms are crucial for organizing data in a specific order, and each algorithm has its unique methodology, complexity, and use cases. This document provides a summary of essential details for various sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort.

## 1. Bubble Sort

- **Description**: A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process continues until no swaps are needed, indicating that the list is sorted.

- **Time Complexity**:

  - Best Case: O(n) (when the array is already sorted)
  - Average Case: O(n²)
  - Worst Case: O(n²)

- **Space Complexity**: O(1)

- **Use Cases**: Useful for small datasets or nearly sorted data due to its simplicity.

## 2. Selection Sort

- **Description**: Divides the input list into a sorted and an unsorted sublist. It repeatedly selects the smallest (or largest) element from the unsorted sublist and moves it to the end of the sorted sublist.

- **Time Complexity**:

  - Best Case: O(n²)
  - Average Case: O(n²)
  - Worst Case: O(n²)

- **Space Complexity**: O(1)

- **Use Cases**: Works well for small datasets or when memory write operations are costly.

## 3. Insertion Sort

- **Description**: Builds a sorted array one element at a time. It takes each element from the unsorted portion and inserts it into its correct position within the sorted portion of the array.

- **Time Complexity**:

  - Best Case: O(n) (when the array is already sorted)
  - Average Case: O(n²)
  - Worst Case: O(n²)

- **Space Complexity**: O(1)

- **Use Cases**: Efficient for small datasets or when data is partially sorted.

## 4. Quick Sort

- **Description**: A divide-and-conquer algorithm that selects a pivot element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

- **Time Complexity**:

  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - Worst Case: O(n²) (when the pivot is the smallest or largest element)

- **Space Complexity**: O(log n) (due to recursion)

- **Use Cases**: Suitable for large datasets; often faster in practice than other O(n log n) algorithms due to its in-place sorting capabilities.

## 5. Merge Sort

- **Description**: A divide-and-conquer algorithm that divides the array into halves, sorts each half, and merges the sorted halves back together. It is known for its efficiency and stability.

- **Time Complexity**:

  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - Worst Case: O(n log n)

- **Space Complexity**: O(n)

- **Use Cases**: Useful for large datasets and when stability is required (preserving the order of equal elements).
