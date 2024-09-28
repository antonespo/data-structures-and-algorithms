export class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightIndex(index: number) {
    return 2 * index + 2;
  }

  public insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  private swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  public extractMin() {
    if (this.size() === 0) {
      return null;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  private heapifyDown(index: number) {
    let smallest = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);

    if (left < this.size() && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }

    if (right < this.size() && this.heap[smallest] > this.heap[right]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  public peek(): number | null {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

export class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightIndex(index: number) {
    return 2 * index + 2;
  }

  public insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  private swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  public extractMax() {
    if (this.size() === 0) {
      return null;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return max;
  }

  private heapifyDown(index: number) {
    let largest = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);

    if (left < this.size() && this.heap[largest] < this.heap[left]) {
      largest = left;
    }

    if (right < this.size() && this.heap[largest] < this.heap[right]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  public peek(): number | null {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }
}
