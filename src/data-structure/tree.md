# Trees Data Structure

## Overview

A **tree** is a hierarchical data structure that represents relationships between elements. It is made up of nodes connected by edges, with each node containing a value or data and zero or more child nodes. The topmost node is called the **root**, and every other node is a descendant of the root. Trees are widely used in computer science for various applications, such as representing hierarchical data, implementing efficient searching and sorting algorithms, and providing a basis for many complex data structures.

## Properties of Trees

1. **Root Node**: The topmost node in the tree, which has no parent.
2. **Parent and Child Nodes**: Nodes connected directly below another node are called child nodes, and the node they are connected to is called their parent.
3. **Leaf Node**: A node with no children.
4. **Height/Depth of Tree**: The longest path from the root node to a leaf node.
5. **Subtree**: A tree formed by a node and its descendants.
6. **Height/Depth of Node**: The distance from a node to the farthest leaf node is called its height. The depth is the distance from the root to the node.

## Types of Trees

### 1. Binary Trees

A **binary tree** is a tree where each node has at most two children, referred to as the left child and the right child.

- **Full Binary Tree**: Every node has either 0 or 2 children.
- **Complete Binary Tree**: All levels are fully filled except possibly the last level, which is filled from left to right.
- **Perfect Binary Tree**: All internal nodes have two children, and all leaf nodes are at the same level.

### 2. Binary Search Trees (BST)

A **Binary Search Tree** is a binary tree in which for every node:

- The left subtree contains only nodes with values less than the node’s value.
- The right subtree contains only nodes with values greater than the node’s value.

This property makes BSTs efficient for searching, insertion, and deletion operations.

### 3. AVL Trees

An **AVL Tree** is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes. If a node becomes unbalanced, rotation operations are performed to restore balance.

### 4. Other Specialized Trees

- **Red-Black Tree**: A balanced binary search tree that maintains balance using color properties.
- **B-trees**: Balanced search trees optimized for reading and writing large blocks of data.
- **Tries (Prefix Trees)**: A tree used to store a dynamic set of strings where the keys share common prefixes.

## Tree Traversal

Tree traversal refers to the process of visiting each node in a tree exactly once in a systematic way. There are several traversal methods:

### 1. Depth-First Traversal

- **In-Order Traversal (Left, Root, Right)**:

  - Visit the left subtree, then the root, and finally the right subtree.
  - This traversal is useful for Binary Search Trees because it visits nodes in ascending order.

- **Pre-Order Traversal (Root, Left, Right)**:

  - Visit the root first, then the left subtree, and finally the right subtree.
  - Useful for creating a copy of the tree.

- **Post-Order Traversal (Left, Right, Root)**:
  - Visit the left subtree, then the right subtree, and finally the root.
  - Useful for deleting the entire tree because it visits the root node last.

### 2. Breadth-First Traversal

- **Level-Order Traversal**:
  - Visit nodes level by level from top to bottom.
  - Uses a queue to process nodes in a breadth-first manner.

## Insertion, Deletion & Common Operations in Trees

### 1. Insertion in a Binary Search Tree (BST)

- Start at the root node.
- If the value to insert is less than the current node’s value, go to the left child.
- If the value is greater, go to the right child.
- Repeat until an empty spot is found, then insert the new node.

### 2. Deletion in a Binary Search Tree (BST)

Deletion in a BST can be complex, as it requires consideration of three cases:

- **Node to be deleted is a leaf**: Simply remove the node.
- **Node to be deleted has one child**: Replace the node with its child.
- **Node to be deleted has two children**: Find the in-order successor (smallest node in the right subtree), replace the node’s value with the successor’s value, and delete the successor.

### 3. Search Operation

- Begin at the root and compare the target value with the current node.
- Move left or right depending on whether the value is smaller or greater.
- Continue until the value is found or the search reaches a leaf node.

### 4. Other Operations

- **Find Minimum/Maximum**: Traverse to the leftmost (minimum) or rightmost (maximum) node.
- **Find Height of the Tree**: Calculate the longest path from the root to a leaf node.

### Note: Skip AVL Tree Operations

For AVL trees, specialized insertion and deletion operations with rotations (single and double) are used to maintain balance. These operations are more complex and not covered in this document.

## Complexity

| Operation | Binary Tree (Average) | Binary Search Tree (Average) | Binary Tree (Worst Case) | Binary Search Tree (Worst Case) |
| --------- | --------------------- | ---------------------------- | ------------------------ | ------------------------------- |
| Insertion | O(log n)              | O(log n)                     | O(n)                     | O(n)                            |
| Deletion  | O(log n)              | O(log n)                     | O(n)                     | O(n)                            |
| Search    | O(log n)              | O(log n)                     | O(n)                     | O(n)                            |
| Traversal | O(n)                  | O(n)                         | O(n)                     | O(n)                            |

- **Insertion, Deletion, and Search**: These operations take logarithmic time on average for balanced trees like AVL or Red-Black Trees. For skewed or unbalanced trees, the complexity degrades to O(n).
- **Traversal**: Visiting all nodes takes linear time O(n).

## Applications of Trees

1. **Hierarchical Data Representation**: File systems, organizational charts, and XML/HTML document object models are represented using trees.
2. **Searching and Sorting**: BSTs and AVL trees are used to implement efficient searching and sorting algorithms.
3. **Databases**: B-trees and B+ trees are used to manage indexing in databases, allowing for efficient query processing.
4. **Network Routing**: Trees help represent routing paths and hierarchical network structures.
5. **Compression Algorithms**: Huffman coding, a compression algorithm, uses binary trees to represent encoding schemes.
