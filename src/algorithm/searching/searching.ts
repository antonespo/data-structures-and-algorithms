export const linearSearch = (array: number[], target: number): number => {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
};

export const binarySearch = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let midValue = array[mid];
    if (midValue === target) {
      return mid;
    } else if (midValue < target) {
      left = mid + 1;
    } else if (target < midValue) {
      right = mid - 1;
    }
  }

  return -1;
};

export const jumpSearch = (array: number[], target: number): number => {
  const length = array.length;
  let step = Math.floor(Math.sqrt(array.length));
  let left = 0;
  let right = step;

  while (array[Math.min(right, length) - 1] < target) {
    left = right;
    right += step;
    if (left >= length) {
      return -1;
    }
  }

  for (let i = left; i < Math.min(right, length); i++) {
    if (target === array[i]) {
      return i;
    }
  }

  return -1;
};
