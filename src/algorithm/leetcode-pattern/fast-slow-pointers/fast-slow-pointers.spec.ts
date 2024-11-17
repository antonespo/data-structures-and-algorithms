import { SinglyLinkedList, SinglyLinkedListNode } from '../../../data-structure/linked-list/linked-list';
import { findMiddle, hasCycle } from './fast-slow-pointers';

describe('findMiddle', () => {
  it.each([
    {
      input: [1, 2, 3, 4, 5],
      expected: 3
    },
    {
      input: [1, 2, 3, 4, 5, 6],
      expected: 4
    },
    {
      input: [1],
      expected: 1
    },
    {
      input: [],
      expected: null
    }
  ])('returns the middle value for $input', ({ input, expected }) => {
    const list = new SinglyLinkedList<number>();
    input.forEach(value => list.append(value));

    expect(findMiddle(list)).toBe(expected);
  });
});

describe('hasCycle', () => {
  it('detects a cycle in a list', () => {
    const node1 = new SinglyLinkedListNode(1);
    const node2 = new SinglyLinkedListNode(2);
    const node3 = new SinglyLinkedListNode(3);

    node1.next = node2;
    node2.next = node3;
    node3.next = node1; // Creates a cycle

    expect(hasCycle(node1)).toBe(true);
  });

  it('returns false for a list without a cycle', () => {
    const node1 = new SinglyLinkedListNode(1);
    const node2 = new SinglyLinkedListNode(2);
    const node3 = new SinglyLinkedListNode(3);

    node1.next = node2;
    node2.next = node3;

    expect(hasCycle(node1)).toBe(false);
  });

  it('returns false for an empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });
});
