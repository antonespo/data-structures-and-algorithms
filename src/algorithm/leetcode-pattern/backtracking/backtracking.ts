/**
 * LeetCode Problem #46 - Permutations
 *
 * Given an array `nums` of distinct integers, return all possible permutations.
 *
 * This function uses Backtracking to explore all potential permutations.
 *
 * @param {number[]} nums - An array of distinct integers.
 * @returns {number[][]} An array of all possible permutations.
 *
 * @example
 * permute([1, 2, 3]); // Returns [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * @see https://leetcode.com/problems/permutations/
 */
export function permute(nums: number[]): number[][] {
  const results: number[][] = [];

  const backtrack = (current: number[], remaining: Set<number>) => {
    if (remaining.size === 0) {
      results.push([...current]); // Add a completed permutation
      return;
    }

    for (const num of Array.from(remaining)) {
      current.push(num);
      remaining.delete(num);

      backtrack(current, remaining);

      current.pop(); // Undo the last choice
      remaining.add(num); // Restore the set
    }
  };

  backtrack([], new Set(nums));
  return results;
}

/**
 * LeetCode Problem #78 - Subsets
 *
 * Generates all possible subsets of an array of integers.
 *
 * @param {number[]} nums - An array of integers.
 * @returns {number[][]} An array containing all subsets of the input.
 *
 * @example
 * subsets([1, 2, 3]); // Returns [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
 *
 * @see https://leetcode.com/problems/subsets/
 */
export function subsets(nums: number[]): number[][] {
  const results: number[][] = [];
  const backtrack = (path: number[], index: number) => {
    results.push([...path]);
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return results;
}

/**
 * LeetCode Problem #51 - N-Queens
 *
 * Finds all valid configurations for the N-Queens problem.
 *
 * @param {number} n - The size of the chessboard and the number of queens.
 * @returns {string[][]} An array of solutions, where each solution is represented as a list of strings.
 *
 * @example
 * solveNQueens(4); // Returns [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]
 *
 * @see https://leetcode.com/problems/n-queens/
 */
export function solveNQueens(n: number): string[][] {
  const results: string[][] = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const cols = new Set<number>();
  const diag1 = new Set<number>();
  const diag2 = new Set<number>();

  const backtrack = (row: number) => {
    if (row === n) {
      results.push(board.map(row => row.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
      board[row][col] = 'Q';
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      backtrack(row + 1);
      board[row][col] = '.';
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  };
  backtrack(0);
  return results;
}
