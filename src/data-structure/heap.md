# Heap Data Structure

## Overview

A **heap** is a special tree-based data structure that satisfies the heap property. Heaps are primarily used to implement priority queues, where the highest (or lowest) priority element is efficiently accessible.

There are two types of heaps:

- **Max Heap**: In a Max Heap, for any given node `i`, the value of `i` is greater than or equal to the values of its children. The maximum value is at the root of the heap.
- **Min Heap**: In a Min Heap, for any given node `i`, the value of `i` is less than or equal to the values of its children. The minimum value is at the root of the heap.

## Properties of Heaps

1. **Complete Binary Tree**:

   - A heap is a complete binary tree, meaning all levels of the tree are fully filled except possibly for the last level, which is filled from left to right.

2. **Heap Order Property**:

   - **Max Heap**: Every parent node has a value greater than or equal to its children.
   - **Min Heap**: Every parent node has a value less than or equal to its children.

3. **Efficient Access**:

   - The maximum (or minimum) element can be accessed in constant time `O(1)` from the root node.

4. **Insertion and Deletion**:
   - Insertions and deletions maintain the heap property through restructuring (heapify operations).

## Insertion in a Heap

When inserting an element into a heap, the following steps are performed:

1. **Add the New Element**:

   - The new element is added at the end of the heap (at the last position in the array representation) to maintain the complete tree property.

2. **Heapify Up Operation**:
   - The newly added element may violate the heap property if it is smaller or larger than its parent (depending on whether it’s a Min or Max Heap).
   - To restore the heap property, the element is repeatedly swapped with its parent until the heap property is restored. This process is called **heapify up**.

## Extraction in a Heap

When extracting the minimum or maximum element from a heap, the following steps are performed:

1. **Swap and Remove the Root**:

   - The root element, which is the minimum (in a Min Heap) or maximum (in a Max Heap), is removed.
   - To maintain the complete tree property, the last element in the heap is moved to the root position.

2. **Heapify Down Operation**:
   - The element that was moved to the root may violate the heap property.
   - To restore the heap property, the element is repeatedly swapped with its smallest (Min Heap) or largest (Max Heap) child until the heap property is restored. This process is called **heapify down**.

## Complexity

| Operation       | Time Complexity | Space Complexity |
| --------------- | --------------- | ---------------- |
| Insert          | O(log n)        | O(1)             |
| Extract Max/Min | O(log n)        | O(1)             |
| Peek (Max/Min)  | O(1)            | O(1)             |
| Search          | O(n)            | O(1)             |
| Build Heap      | O(n)            | O(1)             |

- **Insert**: When inserting an element, it is added to the end of the heap (to maintain the complete tree property), and then a "heapify up" operation is performed, which takes logarithmic time.
- **Extract Max/Min**: The root node is removed, and the last node is moved to the root position. Then, a "heapify down" operation is performed to restore the heap property, which also takes logarithmic time.

- **Peek**: Accessing the root node is constant time as it doesn’t require any structural changes.

- **Search**: Searching for an arbitrary element takes linear time as heaps do not have a specific ordering among sibling nodes.

- **Build Heap**: Constructing a heap from an array of elements can be done in linear time using the bottom-up approach.

## Applications of Heaps

- **Priority Queues**: Heaps are widely used in implementing priority queues where elements are processed based on priority rather than just FIFO order.
- **Heap Sort**: A comparison-based sorting algorithm that uses a binary heap to sort elements in O(n log n) time.
- **Graph Algorithms**: Heaps are used in Dijkstra’s and Prim’s algorithms for efficient extraction of minimum/maximum elements.
