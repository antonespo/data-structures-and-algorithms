import { binarySearch, jumpSearch, linearSearch } from './searching';

describe('Searching Algorithms', () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const unsortedArray = [10, 4, 3, 7, 8, 2, 1, 9, 6, 5];

  describe('Linear search', () => {
    it('finds target in unordered array', () => {
      expect(linearSearch(unsortedArray, 7)).toBe(3);
    });

    it('returns -1 if target is not found', () => {
      expect(linearSearch(unsortedArray, 13)).toBe(-1);
    });

    it('handles empty array', () => {
      expect(linearSearch([], 3)).toBe(-1);
    });
  });

  describe('Binary search', () => {
    it('finds target in unordered array', () => {
      expect(binarySearch(sortedArray, 7)).toBe(3);
    });

    it('returns -1 if target is not found', () => {
      expect(binarySearch(sortedArray, 14)).toBe(-1);
    });

    it('handles empty array', () => {
      expect(binarySearch([], 3)).toBe(-1);
    });
  });

  describe('Jump search', () => {
    it.each(sortedArray)('finds target %d in the array', target => {
      const index = sortedArray.indexOf(target);
      expect(jumpSearch(sortedArray, target)).toBe(index);
    });

    it.each([100, -1, 20])('should return -1 for target %d', target => {
      expect(jumpSearch(sortedArray, target)).toBe(-1);
    });

    it('handles empty array', () => {
      expect(jumpSearch([], 3)).toBe(-1);
    });
  });
});
