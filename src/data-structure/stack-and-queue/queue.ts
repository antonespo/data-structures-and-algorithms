import { SinglyLinkedList } from '../linked-list/linked-list';

/**
 * Interface for a queue data structure.
 */
export interface Queue<T> {
  /**
   * Adds an element to the end of the queue.
   * @param element - The element to be added to the queue.
   */
  enqueue(element: T): void;

  /**
   * Removes and returns the element at the front of the queue.
   * @returns The front element of the queue or undefined if the queue is empty.
   */
  dequeue(): T | undefined;

  /**
   * Returns the front element of the queue without removing it.
   * @returns The front element of the queue or undefined if the queue is empty.
   */
  peek(): T | undefined;

  /**
   * Checks whether the queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns the number of elements in the queue.
   * @returns The size of the queue.
   */
  size(): number;

  /**
   * Removes all elements from the queue.
   */
  clear(): void;
}

/**
 * Queue implementation using an array.
 */
export class ArrayQueue<T> implements Queue<T> {
  private items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
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
 * Queue implementation using a singly linked list.
 */
export class LinkedListQueue<T> implements Queue<T> {
  private linkedList = new SinglyLinkedList<T>();

  enqueue(element: T): void {
    this.linkedList.append(element);
  }

  dequeue(): T | undefined {
    if (!this.linkedList.head) {
      return undefined;
    }

    const value = this.linkedList.head.value;
    this.linkedList.head = this.linkedList.head.next;
    return value;
  }

  peek(): T | undefined {
    return this.linkedList.head?.value;
  }

  isEmpty(): boolean {
    return this.linkedList.head === null;
  }

  size(): number {
    let count = 0;
    let current = this.linkedList.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  clear(): void {
    this.linkedList = new SinglyLinkedList();
  }
}
