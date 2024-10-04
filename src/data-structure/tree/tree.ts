class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Insert a value into the tree
  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  // Helper method to recursively insert a new node into the correct position
  private insertNode(currentNode: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  // Find the minimum value in the tree
  findMin(): T | null {
    const node = this.findMinNode(this.root);
    return node ? node.value : null;
  }

  // Find the maximum value in the tree
  findMax(): T | null {
    const node = this.findMaxNode(this.root);
    return node ? node.value : null;
  }

  // Helper method to find the node with the minimum value
  private findMinNode(node: TreeNode<T> | null): TreeNode<T> | null {
    while (node?.left !== null) {
      node = node!.left;
    }
    return node;
  }

  // Helper method to find the node with the maximum value
  private findMaxNode(node: TreeNode<T> | null): TreeNode<T> | null {
    while (node?.right !== null) {
      node = node!.right;
    }
    return node;
  }

  // Search for a node with a specific value
  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a node
  private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null || value === node.value) {
      return node;
    }
    return value < node.value ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
  }

  // Remove a node with a given value
  remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  // Helper method to recursively remove a node from the tree
  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) return null; // Node not found

    if (value < node.value) {
      node.left = this.removeNode(node.left, value); // Search in the left subtree
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value); // Search in the right subtree
      return node;
    }

    // Node to be deleted is found
    if (node.left === null && node.right === null) {
      return null; // No children (leaf node), delete it by returning null
    } else if (node.left === null) {
      return node.right; // One child (right), replace with right child
    } else if (node.right === null) {
      return node.left; // One child (left), replace with left child
    }

    // Node has two children
    const inOrderSuccessor = this.findMinNode(node.right);
    if (inOrderSuccessor !== null) {
      node.value = inOrderSuccessor.value;
      node.right = this.removeNode(node.right, inOrderSuccessor.value); // Delete the in-order successor
    }

    return node;
  }

  // In-order traversal (Left, Root, Right)
  inOrderTraversal(callback: (value: T) => void): void {
    this.inOrder(this.root, callback);
  }

  private inOrder(node: TreeNode<T> | null, callback: (value: T) => void): void {
    if (node !== null) {
      this.inOrder(node.left, callback);
      callback(node.value);
      this.inOrder(node.right, callback);
    }
  }

  // Pre-order traversal (Root, Left, Right)
  preOrderTraversal(callback: (value: T) => void): void {
    this.preOrder(this.root, callback);
  }

  private preOrder(node: TreeNode<T> | null, callback: (value: T) => void): void {
    if (node !== null) {
      callback(node.value);
      this.preOrder(node.left, callback);
      this.preOrder(node.right, callback);
    }
  }

  // Post-order traversal (Left, Right, Root)
  postOrderTraversal(callback: (value: T) => void): void {
    this.postOrder(this.root, callback);
  }

  private postOrder(node: TreeNode<T> | null, callback: (value: T) => void): void {
    if (node !== null) {
      this.postOrder(node.left, callback);
      this.postOrder(node.right, callback);
      callback(node.value);
    }
  }
}
