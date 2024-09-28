import { SinlgyLinkedList } from './linked-list';

test('singly linked list - append', () => {
  const list = new SinlgyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.toArray()).toStrictEqual([1, 2, 3]);
});

test('singly linked list - find', () => {
  const list = new SinlgyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const firstFind = list.find(2);
  expect(firstFind?.value).toBe(2);
  const secondFind = list.find(100);
  expect(secondFind?.value).toBeUndefined();
});

test('singly linked list - remove', () => {
  const list = new SinlgyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  const firstRemove = list.remove(2);
  expect(firstRemove).toBeTruthy();
  expect(list.toArray()).toStrictEqual([1, 3]);

  const secondRemove = list.remove(1);
  expect(secondRemove).toBeTruthy();
  expect(list.toArray()).toStrictEqual([3]);

  const thirdRemove = list.remove(100);
  expect(thirdRemove).toBeFalsy();
  expect(list.toArray()).toStrictEqual([3]);
});
