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

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(currentNode: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < currentNode.value) {
      // Insert into the left subtree
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      // Insert into the right subtree
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  // Find the minimum value node starting from a given node
  private findMinNode(node: TreeNode<T> | null) {
    if (node === null) {
      return null;
    }
    while (node?.left !== null) {
      node = node!.left;
    }
    return node;
  }

  // Find the maximum value node starting from a given node
  private findMaxNode(node: TreeNode<T> | null) {
    if (node === null) {
      return null;
    }
    while (node?.right !== null) {
      node = node!.right;
    }
    return node;
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

  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value); // Search in the left subtree
    } else if (value > node.value) {
      return this.searchNode(node.right, value); // Search in the right subtree
    } else {
      return node;
    }
  }

  remove(value: T) {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value); // Search in the left subtree
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value); // Search in the right subtree
      return node;
    }

    // Case 1: The node has no children
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // Case 2: The node has one child
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }

    // Case 3: The node has two children
    const inOrderSuccessor = this.findMinNode(node.right);
    node.value = inOrderSuccessor!.value;
    node.right = this.removeNode(node.right, inOrderSuccessor!.value);
    return node;
  }

  inOrderTraversal(callback: (value: T) => void): void {
    throw new Error('Method not implemented.');
  }
  preOrderTraversal(callback: (value: T) => void): void {
    throw new Error('Method not implemented.');
  }
  postOrderTraversal(callback: (value: T) => void): void {
    throw new Error('Method not implemented.');
  }
}
