export const bubbleSort = (array: number[]) => {
  for (let j = 0; j < array.length; j++) {
    let swapped = false;

    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }

    // If no elements were swapped in the inner loop, the array is sorted
    if (!swapped) {
      break;
    }
  }

  return array;
};

export const selectionSort = (array: number[]) => {
  for (let j = 0; j < array.length; j++) {
    let minIndex = j;
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
    }
    // Swap only if a new minimum was found
    if (minIndex !== j) {
      [array[j], array[minIndex]] = [array[minIndex], array[j]];
    }
  }
  return array;
};

export const insertionSort = (array: number[]) => {
  for (let j = 1; j < array.length; j++) {
    const element = array[j];
    let i: number;

    // Find the correct position for `element`
    for (i = j - 1; i >= 0 && array[i] > element; i--) {
      // Shift elements to the right
      array[i + 1] = array[i];
    }

    // Insert the `element` into its correct position
    array[i + 1] = element;
  }

  return array;
};

export const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array; // An array of length 0 or 1 is already sorted
  }

  const pivot = array[Math.floor(array.length / 2)]; // Choose the middle element as the pivot
  const leftArray: number[] = [];
  const rightArray: number[] = [];
  const equalArray: number[] = [];

  for (const element of array) {
    if (element < pivot) {
      leftArray.push(element); // Elements less than the pivot go to the left array
    } else if (element > pivot) {
      rightArray.push(element); // Elements greater than the pivot go to the right array
    } else {
      equalArray.push(element); // Elements equal to the pivot go to the equal array
    }
  }

  return [...quickSort(leftArray), ...equalArray, ...quickSort(rightArray)];
};

export const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
};

const merge = (leftArray: number[], rightArray: number[]): number[] => {
  const sortedArray: number[] = [];

  // While there are elements in both left and right arrays
  while (leftArray.length && rightArray.length) {
    const arrayToShift = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    sortedArray.push(arrayToShift.shift()!);
  }

  // If there are remaining elements in either left or right array, add them to the sorted array
  return [...sortedArray, ...leftArray, ...rightArray];
};
