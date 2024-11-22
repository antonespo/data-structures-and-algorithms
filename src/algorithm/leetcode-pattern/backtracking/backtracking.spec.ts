import { permute, subsets, solveNQueens } from './backtracking';

describe('permute', () => {
  it.each([
    [
      [1, 2],
      [
        [1, 2],
        [2, 1]
      ]
    ],
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ]
    ],
    [[], [[]]]
  ])('permute(%j) should return %j', (input, expected) => {
    expect(permute(input)).toEqual(expect.arrayContaining(expected));
  });
});

describe('subsets', () => {
  it.each([
    [
      [1, 2],
      [[], [1], [2], [1, 2]]
    ],
    [
      [1, 2, 3],
      [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    ],
    [[], [[]]]
  ])('subsets(%j) should return %j', (input, expected) => {
    expect(subsets(input)).toEqual(expect.arrayContaining(expected));
  });
});

describe('solveNQueens', () => {
  it.each([
    [
      4,
      [
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..']
      ]
    ],
    [1, [['Q']]]
  ])('solveNQueens(%d) should return %j', (n, expected) => {
    expect(solveNQueens(n)).toEqual(expect.arrayContaining(expected));
  });
});
