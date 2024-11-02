import { SinglyLinkedList } from '../linked-list/linked-list';

/**
 * Stack implementation using an array.
 */
export class ArrayStack<T> {
  private items: T[] = [];

  /**
   * Pushes an element onto the top of the stack.
   * @param element - The element to be pushed onto the stack.
   */
  push(element: T): void {
    this.items.push(element);
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns The top element of the stack or undefined if the stack is empty.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns The top element of the stack or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.items[this.size() - 1];
  }

  /**
   * Checks whether the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns The size of the stack.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Removes all elements from the stack.
   */
  clear(): void {
    this.items = [];
  }
}

/**
 * Stack implementation using a singly linked list.
 */
export class LinkedListStack<T> {
  private linkedList: SinglyLinkedList<T> = new SinglyLinkedList();
  private stackSize: number = 0;

  /**
   * Pushes an element onto the top of the stack.
   * @param element - The element to be pushed onto the stack.
   */
  push(element: T): void {
    this.linkedList.append(element);
    this.stackSize++;
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns The top element of the stack or undefined if the stack is empty.
   */
  pop(): T | undefined {
    const value = this.linkedList.pop(); // Use pop from linked list
    if (value !== undefined) {
      this.stackSize--;
    }
    return value;
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns The top element of the stack or undefined if the stack is empty.
   */
  peek(): T | undefined {
    let current = this.linkedList.head;
    if (!current) {
      return undefined;
    }

    while (current.next) {
      current = current.next;
    }
    return current.value;
  }

  /**
   * Checks whether the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.stackSize === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns The size of the stack.
   */
  size(): number {
    return this.stackSize;
  }

  /**
   * Removes all elements from the stack.
   */
  clear(): void {
    this.linkedList = new SinglyLinkedList();
    this.stackSize = 0;
  }
}
