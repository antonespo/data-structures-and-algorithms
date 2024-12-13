import { SinglyLinkedList, SinglyLinkedListNode } from '../../../data-structure/linked-list/linked-list';

/**
 * LeetCode Problem #876 - Middle of the Linked List
 *
 * Finds the middle node of a singly linked list.
 *
 * This function uses the Fast and Slow Pointer technique to find the middle node
 * efficiently in a single traversal. If the list has an even number of nodes,
 * it returns the second middle node.
 *
 * @template T The type of the linked list's values.
 * @param {SinglyLinkedList<T>} list The singly linked list.
 * @returns {T | null} The value of the middle node, or `null` if the list is empty.
 *
 * @example
 * const list = new SinglyLinkedList<number>();
 * list.append(1);
 * list.append(2);
 * list.append(3);
 * findMiddle(list); // Returns 2
 *
 * @see https://leetcode.com/problems/middle-of-the-linked-list/
 */
export function findMiddle<T>(list: SinglyLinkedList<T>): T | null {
  if (!list.head) {
    return null;
  }

  let slow: SinglyLinkedListNode<T> | null = list.head;
  let fast: SinglyLinkedListNode<T> | null = list.head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow?.value ?? null;
}

/**
 * LeetCode Problem #141 - Linked List Cycle
 *
 * Detects if a cycle exists in a singly linked list.
 *
 * This function uses Floyd's Cycle Detection Algorithm (Tortoise and Hare). A fast pointer
 * moves two steps at a time, and a slow pointer moves one step. If there is a cycle,
 * the two pointers will meet.
 *
 * @template T The type of the linked list's values.
 * @param {SinglyLinkedListNode<T> | null} head The head node of the singly linked list.
 * @returns {boolean} `true` if a cycle exists, otherwise `false`.
 *
 * @example
 * const node1 = new SinglyLinkedListNode(1);
 * const node2 = new SinglyLinkedListNode(2);
 * const node3 = new SinglyLinkedListNode(3);
 * node1.next = node2;
 * node2.next = node3;
 * node3.next = node1; // Creates a cycle
 * hasCycle(node1); // Returns true
 *
 * @see https://leetcode.com/problems/linked-list-cycle/
 */
export function hasCycle<T>(head: SinglyLinkedListNode<T> | null): boolean {
  if (!head) {
    return false;
  }

  let slow: SinglyLinkedListNode<T> | null = head;
  let fast: SinglyLinkedListNode<T> | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

/**
 * LeetCode Problem #234 - Palindrome Linked List
 *
 * Determines if a singly linked list is a palindrome.
 *
 * This function uses the Fast and Slow Pointer technique to find the middle of the linked list.
 * It then reverses the second half of the list and compares it with the first half to check
 * if the list is a palindrome.
 *
 * @template T The type of the linked list's values.
 * @param {SinglyLinkedList<T>} list The singly linked list.
 * @returns {boolean} `true` if the list is a palindrome, `false` otherwise.
 *
 * @example
 * const list = new SinglyLinkedList<number>();
 * list.append(1);
 * list.append(2);
 * list.append(2);
 * list.append(1);
 * isPalindrome(list); // Returns true
 *
 * @see https://leetcode.com/problems/palindrome-linked-list/
 */
export function isPalindrome<T>(list: SinglyLinkedList<T>): boolean {
  if (!list.head) {
    return true;
  }

  // Step 1: Find the middle of the linked list.
  let slow: SinglyLinkedListNode<T> | null = list.head;
  let fast: SinglyLinkedListNode<T> | null = list.head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list.
  let prevNode: SinglyLinkedListNode<T> | null = null;
  let current = slow;

  while (current) {
    const nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
  }

  // Step 3: Compare the first half and the reversed second half.
  let left: SinglyLinkedListNode<T> | null = list.head;
  let right: SinglyLinkedListNode<T> | null = prevNode;

  while (left && right) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}
