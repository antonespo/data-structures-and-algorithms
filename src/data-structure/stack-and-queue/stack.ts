import { SinglyLinkedList } from '../linked-list/linked-list';

/**
 * Interface for a stack data structure.
 */
export interface Stack<T> {
  /**
   * Pushes an element onto the top of the stack.
   * @param element - The element to be pushed onto the stack.
   */
  push(element: T): void;

  /**
   * Removes and returns the top element of the stack.
   * @returns The top element of the stack or undefined if the stack is empty.
   */
  pop(): T | undefined;

  /**
   * Returns the top element of the stack without removing it.
   * @returns The top element of the stack or undefined if the stack is empty.
   */
  peek(): T | undefined;

  /**
   * Checks whether the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns the number of elements in the stack.
   * @returns The size of the stack.
   */
  size(): number;

  /**
   * Removes all elements from the stack.
   */
  clear(): void;
}

/**
 * Stack implementation using an array.
 */
export class ArrayStack<T> implements Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.size() - 1];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

/**
 * Stack implementation using a singly linked list.
 */
export class LinkedListStack<T> implements Stack<T> {
  private linkedList = new SinglyLinkedList<T>();
  private stackSize = 0;

  push(element: T): void {
    this.linkedList.append(element);
    this.stackSize++;
  }

  pop(): T | undefined {
    const value = this.linkedList.pop();
    if (value !== undefined) {
      this.stackSize--;
    }
    return value;
  }

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

  isEmpty(): boolean {
    return this.stackSize === 0;
  }

  size(): number {
    return this.stackSize;
  }

  clear(): void {
    this.linkedList = new SinglyLinkedList();
    this.stackSize = 0;
  }
}
