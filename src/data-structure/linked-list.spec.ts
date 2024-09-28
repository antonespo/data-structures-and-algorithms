import { DoublyLinkedList, SinlgyLinkedList } from './linked-list';

describe('Singly Linked List', () => {
  let list: SinlgyLinkedList<number>;

  // Initialize a new list before each test case
  beforeEach(() => {
    list = new SinlgyLinkedList<number>();
  });

  test('should append elements to the list', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    // Convert to array and verify
    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test('should prepend elements to the list', () => {
    list.prepend(10);
    list.prepend(20);
    list.prepend(30);

    // Convert to array and verify
    expect(list.toArray()).toEqual([30, 20, 10]);
  });

  test('should find elements in the list', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    const foundNode = list.find(20);
    expect(foundNode?.value).toBe(20);

    // Find non-existent element
    const notFoundNode = list.find(100);
    expect(notFoundNode).toBe(null);
  });

  test('should remove elements from the list', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    // Remove head element
    expect(list.remove(10)).toBe(true);
    expect(list.toArray()).toEqual([20, 30]);

    // Remove middle element
    expect(list.remove(20)).toBe(true);
    expect(list.toArray()).toEqual([30]);

    // Remove last element
    expect(list.remove(30)).toBe(true);
    expect(list.toArray()).toEqual([]);

    // Remove non-existent element
    expect(list.remove(100)).toBe(false);
  });

  test('should handle removal from an empty list', () => {
    expect(list.remove(10)).toBe(false); // Trying to remove when list is empty
  });

  test('should handle prepending and appending correctly together', () => {
    list.append(10);
    list.prepend(20);
    list.append(30);
    list.prepend(40);

    // Convert to array and verify order
    expect(list.toArray()).toEqual([40, 20, 10, 30]);
  });

  test('should handle removal of head node correctly', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    // Remove head node (10)
    expect(list.remove(10)).toBe(true);
    expect(list.toArray()).toEqual([20, 30]);

    // Remove new head node (20)
    expect(list.remove(20)).toBe(true);
    expect(list.toArray()).toEqual([30]);
  });
});

describe('Doubly Linked List', () => {
  let dll: DoublyLinkedList<number>;

  beforeEach(() => {
    dll = new DoublyLinkedList<number>();
  });

  test('should insert elements at the beginning', () => {
    dll.insertAtBeginning(10);
    dll.insertAtBeginning(20);
    expect(dll.getSize()).toBe(2);

    const values = getValuesForward(dll);
    expect(values).toEqual([20, 10]);
  });

  test('should insert elements at the end', () => {
    dll.insertAtEnd(10);
    dll.insertAtEnd(20);
    expect(dll.getSize()).toBe(2);

    const values = getValuesForward(dll);
    expect(values).toEqual([10, 20]);
  });

  test('should delete element by value', () => {
    dll.insertAtEnd(10);
    dll.insertAtEnd(20);
    dll.insertAtEnd(30);

    expect(dll.deleteByValue(20)).toBe(true); // Delete existing element
    expect(dll.getSize()).toBe(2);

    const values = getValuesForward(dll);
    expect(values).toEqual([10, 30]);

    expect(dll.deleteByValue(100)).toBe(false); // Try to delete non-existing element
  });

  test('should display elements forward', () => {
    dll.insertAtEnd(10);
    dll.insertAtEnd(20);
    dll.insertAtEnd(30);

    const values = getValuesForward(dll);
    expect(values).toEqual([10, 20, 30]);
  });

  test('should display elements backward', () => {
    dll.insertAtEnd(10);
    dll.insertAtEnd(20);
    dll.insertAtEnd(30);

    const values = getValuesBackward(dll);
    expect(values).toEqual([30, 20, 10]);
  });

  test('should handle empty list deletion', () => {
    expect(dll.deleteByValue(10)).toBe(false);
  });

  test('should delete the only element in the list', () => {
    dll.insertAtEnd(10);
    expect(dll.deleteByValue(10)).toBe(true);
    expect(dll.getSize()).toBe(0);

    const values = getValuesForward(dll);
    expect(values).toEqual([]);
  });
});

// Helper functions to extract values from the doubly linked list
function getValuesForward<T>(list: DoublyLinkedList<T>): T[] {
  const values: T[] = [];
  let current = (list as any).head; // Accessing private properties for testing purposes

  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}

function getValuesBackward<T>(list: DoublyLinkedList<T>): T[] {
  const values: T[] = [];
  let current = (list as any).tail; // Accessing private properties for testing purposes

  while (current !== null) {
    values.push(current.value);
    current = current.prev;
  }
  return values;
}
