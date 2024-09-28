import { MaxHeap, MinHeap } from './heap';

describe('Min-Heap', () => {
  let heap: MinHeap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  test('should insert elements and maintain min-heap property', () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(3);
    heap.insert(8);

    expect(heap.peek()).toBe(3);
  });

  test('should extract the minimum element and maintain the heap structure', () => {
    heap.insert(7);
    heap.insert(3);
    heap.insert(10);
    heap.insert(5);

    expect(heap.extractMin()).toBe(3);
    expect(heap.extractMin()).toBe(5);
    expect(heap.extractMin()).toBe(7);
    expect(heap.extractMin()).toBe(10);
  });

  test('should return null when extracting from an empty heap', () => {
    expect(heap.extractMin()).toBeNull();
  });

  test('should return the correct size of the heap', () => {
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);

    expect(heap.size()).toBe(3);
  });

  test('should return true when the heap is empty', () => {
    expect(heap.isEmpty()).toBe(true);

    heap.insert(1);
    expect(heap.isEmpty()).toBe(false);
  });

  test('should handle duplicate elements correctly', () => {
    heap.insert(3);
    heap.insert(3);
    heap.insert(3);

    expect(heap.size()).toBe(3);
    expect(heap.extractMin()).toBe(3);
    expect(heap.extractMin()).toBe(3);
    expect(heap.extractMin()).toBe(3);
  });
});

describe('Max-Heap', () => {
  let heap: MaxHeap;

  beforeEach(() => {
    heap = new MaxHeap();
  });

  test('should insert elements and maintain max-heap property', () => {
    heap.insert(10);
    heap.insert(20);
    heap.insert(15);
    heap.insert(30);

    expect(heap.peek()).toBe(30);
  });

  test('should extract the maximum element and maintain the heap structure', () => {
    heap.insert(7);
    heap.insert(20);
    heap.insert(10);
    heap.insert(15);

    expect(heap.extractMax()).toBe(20);
    expect(heap.extractMax()).toBe(15);
    expect(heap.extractMax()).toBe(10);
    expect(heap.extractMax()).toBe(7);
  });

  test('should return null when extracting from an empty heap', () => {
    expect(heap.extractMax()).toBeNull();
  });

  test('should return the correct size of the heap', () => {
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);

    expect(heap.size()).toBe(3);
  });

  test('should return true when the heap is empty', () => {
    expect(heap.isEmpty()).toBe(true);

    heap.insert(1);
    expect(heap.isEmpty()).toBe(false);
  });

  test('should handle duplicate elements correctly', () => {
    heap.insert(3);
    heap.insert(3);
    heap.insert(3);

    expect(heap.size()).toBe(3);
    expect(heap.extractMax()).toBe(3);
    expect(heap.extractMax()).toBe(3);
    expect(heap.extractMax()).toBe(3);
  });
});
