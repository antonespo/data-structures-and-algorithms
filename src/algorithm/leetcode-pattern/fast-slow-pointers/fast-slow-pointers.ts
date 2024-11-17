import { SinglyLinkedList, SinglyLinkedListNode } from '../../../data-structure/linked-list/linked-list';

/**
 * Finds the middle node of a singly linked list.
 * If the list has two middle nodes, the second middle node is returned.
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
 */
export function findMiddle<T>(list: SinglyLinkedList<T>): T | null {
  // Implementation here
  return null;
}

/**
 * Detects if a cycle exists in a singly linked list.
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
 */
export function hasCycle<T>(head: SinglyLinkedListNode<T> | null): boolean {
  // Implementation here
  return false;
}
