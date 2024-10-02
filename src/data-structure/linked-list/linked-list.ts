class SinglyLinkedNode<T> {
  value: T;
  next: SinglyLinkedNode<T> | null;
  constructor(nodeValue: T) {
    this.value = nodeValue;
    this.next = null;
  }
}

export class SinlgyLinkedList<T> {
  head: SinglyLinkedNode<T> | null;
  constructor() {
    this.head = null;
  }

  // Add item at the end of the linked list
  append(value: T) {
    const node = new SinglyLinkedNode<T>(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (!!current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // Add item at the beginning of the linked list
  prepend(value: T) {
    const node = new SinglyLinkedNode(value);
    node.next = this.head;
    this.head = node;
  }

  // Find the first element in the list with the given value
  find(value: T) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    return current ?? null;
  }

  // Remove the first node where the value is contained
  remove(value: T) {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current?.next && current.next.value !== value) {
      current = current?.next ?? null;
    }

    if (current.next) {
      current.next = current.next.next;
      return true;
    }

    return false;
  }

  // Convert entire singly-linked list to an array
  toArray() {
    const array: T[] = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

// Define the Node class for the doubly linked list
class DoublyLinkedListNode<T> {
  value: T;
  next: DoublyLinkedListNode<T> | null = null;
  prev: DoublyLinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null = null;
  private tail: DoublyLinkedListNode<T> | null = null;
  private size: number = 0;

  // Insert at the beginning of the list
  insertAtBeginning(value: T): void {
    const newNode = new DoublyLinkedListNode(value);

    if (this.head === null) {
      // If the list is empty, head and tail both point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Insert new node before the current head
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // Insert at the end of the list
  insertAtEnd(value: T): void {
    const newNode = new DoublyLinkedListNode(value);

    if (this.tail === null) {
      // If the list is empty, head and tail both point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Insert new node after the current tail
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Delete a node by value
  deleteByValue(value: T): boolean {
    if (this.head === null) return false;

    let current = this.head;

    // Traverse the list to find the node with the value
    while (current !== null) {
      if (current.value === value) {
        // Node to be deleted is the head node
        if (current === this.head) {
          this.head = this.head.next;
          if (this.head !== null) this.head.prev = null;
        }
        // Node to be deleted is the tail node
        else if (current === this.tail) {
          this.tail = this.tail.prev;
          if (this.tail !== null) this.tail.next = null;
        }
        // Node is in the middle
        else {
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
        }

        this.size--;
        return true; // Value found and deleted
      }
      current = current.next!;
    }

    return false; // Value not found
  }

  // Display the list from head to tail
  displayForward(): void {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += current.value + ' <-> ';
      current = current.next;
    }

    console.log(result + 'null');
  }

  // Display the list from tail to head
  displayBackward(): void {
    let current = this.tail;
    let result = '';

    while (current !== null) {
      result += current.value + ' <-> ';
      current = current.prev;
    }

    console.log(result + 'null');
  }

  // Get the size of the list
  getSize(): number {
    return this.size;
  }
}
