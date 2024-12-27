import { maxSubArray, maxProduct, maxSubarraySumCircular } from './kadane-algorithm';

describe('maxSubArray', () => {
  it.each([
    { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { input: [1], expected: 1 },
    { input: [5, 4, -1, 7, 8], expected: 23 },
    { input: [-1, -2, -3, -4], expected: -1 },
    { input: [8, -19, 5, -4, 20], expected: 21 },
    { input: [1, 2, 3, 4, 5], expected: 15 },
    { input: [-2, -3, 4, -1, -2, 1, 5, -3], expected: 7 }
  ])("should return $expected for input '$input'", ({ input, expected }) => {
    expect(maxSubArray(input)).toBe(expected);
  });
});

describe('maxProduct', () => {
  it.each([
    { input: [2, 3, -2, 4], expected: 6 },
    { input: [-2, 0, -1], expected: 0 },
    { input: [-2, 3, -4], expected: 24 },
    { input: [0, 2], expected: 2 },
    { input: [-2, -3, 7], expected: 42 },
    { input: [2, -5, -2, -4, 3], expected: 24 }
  ])("should return $expected for input '$input'", ({ input, expected }) => {
    expect(maxProduct(input)).toBe(expected);
  });
});

describe('maxSubarraySumCircular', () => {
  it.each([
    { input: [1, -2, 3, -2], expected: 3 },
    { input: [5, -3, 5], expected: 10 },
    { input: [3, -1, 2, -1], expected: 4 },
    { input: [3, -2, 2, -3], expected: 3 },
    { input: [-2, -3, -1], expected: -1 },
    { input: [8, -1, -3, 8], expected: 16 }
  ])("should return $expected for input '$input'", ({ input, expected }) => {
    expect(maxSubarraySumCircular(input)).toBe(expected);
  });
});
