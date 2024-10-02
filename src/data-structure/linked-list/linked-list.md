# Linked List Data Structure

## Overview

A **linked list** is a linear data structure consisting of a sequence of elements, where each element (commonly called a "node") contains a reference (or link) to the next node in the sequence. Linked lists are dynamic and can grow or shrink in size by allocating or deallocating memory as needed.

There are two main types of linked lists:

- **Singly Linked List**: Each node contains a value and a reference to the next node. Traversal is possible in one direction (from head to tail).
- **Doubly Linked List**: Each node contains a value and two references: one to the next node and one to the previous node. This allows traversal in both directions (forward and backward).

## Properties of Linked Lists

1. **Dynamic Size**:

   - Linked lists can grow and shrink in size by allocating or deallocating memory, unlike arrays which have a fixed size.

2. **Non-contiguous Memory**:

   - Nodes in a linked list can be stored in non-contiguous memory locations, which can lead to better memory utilization in certain scenarios.

3. **No Indexing**:

   - Linked lists do not support random access. To access a specific node, traversal from the head node is necessary, which can result in higher time complexity for certain operations.

4. **Efficient Insertions/Deletions**:
   - Insertions and deletions can be performed in constant time `O(1)` if the pointer to the node to be deleted or the position to insert is known.

## Complexity

| Operation              | Singly Linked List | Doubly Linked List |
| ---------------------- | ------------------ | ------------------ |
| Access                 | O(n)               | O(n)               |
| Search                 | O(n)               | O(n)               |
| Insertion (at head)    | O(1)               | O(1)               |
| Insertion (at tail)    | O(n)               | O(1)               |
| Deletion (given node)  | O(1)               | O(1)               |
| Deletion (search node) | O(n)               | O(n)               |

- **Access**: Both singly and doubly linked lists require linear time to access a specific node because traversal is necessary.

- **Search**: Finding a specific value also takes linear time since every node may need to be examined.

- **Insertion at Head**: Both types allow for constant time insertion at the head.

- **Insertion at Tail**: In a singly linked list, you must traverse to the end to insert, making it linear time, whereas in a doubly linked list, you can maintain a reference to the tail for constant time insertion.

- **Deletion**: Deletion of a given node is constant time for both if the node is known; otherwise, searching takes linear time.

## Applications of Linked Lists

- **Dynamic Memory Allocation**: Linked lists allow dynamic memory usage without needing to specify the size ahead of time.
- **Implementation of Data Structures**: Linked lists are used to implement stacks, queues, and other complex data structures like adjacency lists for graphs.
- **Undo Functionality**: In applications, doubly linked lists can be used for implementing undo features, allowing traversal both backward and forward.
- **Polynomial Representation**: Linked lists can be used to represent polynomials, where each node represents a term.
