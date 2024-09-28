import { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort } from './sorting';

describe('Sort algorithm', () => {
  let array: number[];
  const expected = [1, 2, 3, 4, 5, 8, 9];

  beforeEach(() => {
    array = [2, 8, 5, 3, 9, 4, 1];
  });

  it('Bubble sort', () => {
    expect(bubbleSort(array)).toStrictEqual(expected);
  });

  it('Selection sort', () => {
    expect(selectionSort(array)).toStrictEqual(expected);
  });

  it('Insertion sort', () => {
    expect(insertionSort(array)).toStrictEqual(expected);
  });

  it('Quick sort', () => {
    expect(quickSort(array)).toStrictEqual(expected);
  });

  it('Merge sort', () => {
    expect(mergeSort(array)).toStrictEqual(expected);
  });
});
