import { SinglyLinkedList, SinglyLinkedListNode } from '../../../data-structure/linked-list/linked-list';

/**
 * Finds the middle node of a singly linked list.
 *
 * This function uses the "Fast and Slow Pointer" technique to find the middle node efficiently in a single traversal.
 * The fast pointer moves two steps at a time, while the slow pointer moves one step at a time. When the fast pointer
 * reaches the end of the list, the slow pointer will be at the middle node. If the list has an even number of nodes,
 * the second middle node is returned by default.
 *
 * **Problem Context**:
 * - Linked lists do not have a direct way to access elements by index, unlike arrays. This makes the task of finding
 *   the middle node a non-trivial problem.
 * - Efficiently finding the middle node without traversing the list twice is a common interview question.
 *
 * @param list - The singly linked list.
 * @returns The value of the middle node, or `null` if the list is empty.
 *
 * @example
 * const list = new SinglyLinkedList<number>();
 * list.append(1);
 * list.append(2);
 * list.append(3);
 * list.append(4);
 * list.append(5);
 * findMiddle(list); // Returns 3
 *
 * @see https://leetcode.com/problems/middle-of-the-linked-list/
 */
export function findMiddle<T>(list: SinglyLinkedList<T>): T | null {
  // Implementation here
  return null;
}

/**
 * Detects if a cycle exists in a singly linked list.
 *
 * This function uses Floyd's Cycle Detection Algorithm (also known as the Tortoise and Hare Algorithm).
 * A fast pointer moves two steps at a time, and a slow pointer moves one step at a time. If there is a cycle,
 * the fast pointer will eventually meet the slow pointer.
 *
 * **Problem Context**:
 * - In a singly linked list, there is no inherent structure to prevent cycles, where a node may point back to
 *   an earlier node instead of `null`.
 * - Detecting cycles is important to prevent infinite loops when processing linked lists in real-world applications.
 *
 * **Common Uses**:
 * - Verifying data integrity in linked list-based data structures.
 * - Preventing infinite loops in algorithms that traverse linked lists.
 *
 * @param head - The head node of the singly linked list.
 * @returns `true` if a cycle exists; otherwise, `false`.
 *
 * @example
 * const list = new SinglyLinkedList<number>();
 * const node1 = new SinglyLinkedListNode(1);
 * const node2 = new SinglyLinkedListNode(2);
 * list.head = node1;
 * node1.next = node2;
 * node2.next = node1; // Creates a cycle
 * hasCycle(list.head); // Returns true
 *
 * @see https://leetcode.com/problems/linked-list-cycle/
 */
export function hasCycle<T>(head: SinglyLinkedListNode<T> | null): boolean {
  // Implementation here
  return false;
}
