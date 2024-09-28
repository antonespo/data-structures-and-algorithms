class SingleNode<T> {
  value: T;
  next: SingleNode<T> | null;
  constructor(nodeValue: T) {
    this.value = nodeValue;
    this.next = null;
  }
}

export class SinlgyLinkedList<T> {
  head: SingleNode<T> | null;
  constructor() {
    this.head = null;
  }

  // Add item at the end of the linked list
  append(value: T) {
    const node = new SingleNode<T>(value);
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
    const node = new SingleNode(value);
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
