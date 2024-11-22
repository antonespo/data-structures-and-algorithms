import { SinglyLinkedList, SinglyLinkedListNode } from '../../../data-structure/linked-list/linked-list';
import { findMiddle, hasCycle, isPalindrome } from './fast-slow-pointers';

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

describe('isPalindrome', () => {
  it('returns true for a palindrome list', () => {
    const list = new SinglyLinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(1);
    expect(isPalindrome(list)).toBe(true);
  });

  it('returns false for a non-palindrome list', () => {
    const list = new SinglyLinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(isPalindrome(list)).toBe(false);
  });

  it('returns true for an empty list', () => {
    const list = new SinglyLinkedList<number>();
    expect(isPalindrome(list)).toBe(true);
  });

  it('returns true for a single-node list', () => {
    const list = new SinglyLinkedList<number>();
    list.append(1);
    expect(isPalindrome(list)).toBe(true);
  });

  it('handles odd-length palindromes', () => {
    const list = new SinglyLinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(1);
    expect(isPalindrome(list)).toBe(true);
  });

  it('handles even-length non-palindromes', () => {
    const list = new SinglyLinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(isPalindrome(list)).toBe(false);
  });
});
