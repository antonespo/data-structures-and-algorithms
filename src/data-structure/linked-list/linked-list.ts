/**
 * Represents a node in a singly linked list.
 */
export class SinglyLinkedNode<T> {
  value: T;
  next: SinglyLinkedNode<T> | null;

  /**
   * Creates a new singly linked list node.
   * @param nodeValue - The value to store in the node.
   */
  constructor(nodeValue: T) {
    this.value = nodeValue;
    this.next = null;
  }
}

/**
 * A singly linked list implementation.
 */
export class SinglyLinkedList<T> {
  head: SinglyLinkedNode<T> | null;

  /**
   * Creates an empty singly linked list.
   */
  constructor() {
    this.head = null;
  }

  /**
   * Adds an item at the end of the linked list.
   * @param value - The value to be added.
   */
  append(value: T): void {
    const node = new SinglyLinkedNode<T>(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  /**
   * Adds an item at the beginning of the linked list.
   * @param value - The value to be added.
   */
  prepend(value: T): void {
    const node = new SinglyLinkedNode(value);
    node.next = this.head;
    this.head = node;
  }

  /**
   * Removes the last element from the linked list and returns its value.
   * If the linked list is empty, `undefined` is returned and the linked list is not modified.
   */
  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    let beforeLast = this.head;
    while (beforeLast.next && beforeLast.next.next) {
      beforeLast = beforeLast.next;
    }

    const value = beforeLast.next?.value;
    beforeLast.next = null;
    return value;
  }

  /**
   * Finds the first node with the specified value.
   * @param value - The value to find.
   * @returns The node containing the value, or `null` if not found.
   */
  find(value: T): SinglyLinkedNode<T> | null {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current ?? null;
  }

  /**
   * Removes the first node with the specified value.
   * @param value - The value to remove.
   * @returns `true` if the node was removed; otherwise, `false`.
   */
  remove(value: T): boolean {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      return true;
    }
    return false;
  }

  /**
   * Converts the entire linked list to an array.
   * @returns An array containing all values in the linked list.
   */
  toArray(): T[] {
    const array: T[] = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

/**
 * Represents a node in a doubly linked list.
 */
export class DoublyLinkedListNode<T> {
  value: T;
  next: DoublyLinkedListNode<T> | null = null;
  prev: DoublyLinkedListNode<T> | null = null;

  /**
   * Creates a new doubly linked list node.
   * @param value - The value to store in the node.
   */
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * A doubly linked list implementation.
 */
export class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null = null;
  private tail: DoublyLinkedListNode<T> | null = null;
  private size: number = 0;

  /**
   * Inserts a node at the beginning of the list.
   * @param value - The value to insert.
   */
  insertAtBeginning(value: T): void {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * Inserts a node at the end of the list.
   * @param value - The value to insert.
   */
  insertAtEnd(value: T): void {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Deletes a node by its value.
   * @param value - The value to delete.
   * @returns `true` if the node was found and deleted; otherwise, `false`.
   */
  deleteByValue(value: T): boolean {
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = this.head.next;
          if (this.head) this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          if (this.tail) this.tail.next = null;
        } else {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
        }
        this.size--;
        return true;
      }
      current = current.next!;
    }
    return false;
  }

  /**
   * Displays the list from head to tail.
   */
  displayForward(): void {
    let current = this.head;
    let result = '';

    while (current) {
      result += `${current.value} <-> `;
      current = current.next;
    }

    console.log(result + 'null');
  }

  /**
   * Displays the list from tail to head.
   */
  displayBackward(): void {
    let current = this.tail;
    let result = '';

    while (current) {
      result += `${current.value} <-> `;
      current = current.prev;
    }

    console.log(result + 'null');
  }

  /**
   * Gets the number of nodes in the list.
   * @returns The size of the list.
   */
  getSize(): number {
    return this.size;
  }
}
