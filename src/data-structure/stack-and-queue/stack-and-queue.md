# Stacks and Queues

## Overview

Stacks and queues are linear data structures that manage collections of elements with specific access rules.

### Stack

A **stack** follows the Last In, First Out (LIFO) principle, meaning the last element added is the first one to be removed.

### Queue

A **queue** follows the First In, First Out (FIFO) principle, meaning the first element added is the first one to be removed.

## Implementations

Stacks and queues can be implemented using different data structures:

1. **Array-based Implementation**:

   - **Pros**: Simple to implement and provides direct indexing.
   - **Cons**: Fixed size (if using static arrays) and potential overhead in resizing (for dynamic arrays).

2. **Linked List-based Implementation**:
   - **Pros**: Flexible size, as elements can be dynamically added or removed.
   - **Cons**: Requires additional memory for pointers and may involve complex memory management.

## Operations and Complexity

| Operation        | Stack  | Queue  |
| ---------------- | ------ | ------ |
| **Push/Enqueue** | `O(1)` | `O(1)` |
| **Pop/Dequeue**  | `O(1)` | `O(1)` |
| **Peek/Front**   | `O(1)` | `O(1)` |
| **Is Empty**     | `O(1)` | `O(1)` |
| **Size**         | `O(1)` | `O(1)` |

- **Push/Enqueue**: Adds an element to the top of the stack or the rear of the queue.
- **Pop/Dequeue**: Removes the top element from the stack or the front element from the queue.
- **Peek/Front**: Returns the top element of the stack or the front element of the queue without removing it.
- **Is Empty**: Checks whether the stack or queue is empty.
- **Size**: Returns the number of elements in the stack or queue.

## Use Cases

- **Stack**:
  - Function call management (call stack)
  - Undo mechanisms in text editors
  - Parsing expressions
  - Backtracking algorithms
- **Queue**:
  - Task scheduling
  - Managing requests in servers
  - Implementing breadth-first search (BFS) in graphs

## Advantages and Disadvantages

### Stack

- **Advantages**:

  - Simple to implement and use.
  - Efficient for managing nested structures like recursive calls.

- **Disadvantages**:
  - Limited in terms of access flexibility (can only access the top element).

### Queue

- **Advantages**:

  - Supports fair and predictable order of processing (FIFO).
  - Useful for resource scheduling and management.

- **Disadvantages**:
  - Not suitable for scenarios where random access is required.
