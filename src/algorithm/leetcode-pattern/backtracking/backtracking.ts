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
 * LeetCode Problem #39 - Combination Sum
 *
 * Given an array of distinct integers `candidates` and a target integer `target`,
 * return all unique combinations of `candidates` where the chosen numbers sum to `target`.
 * You may use the same number from `candidates` an unlimited number of times.
 *
 * This function uses Backtracking to find all combinations.
 *
 * @param {number[]} candidates - An array of distinct integers.
 * @param {number} target - Target integer.
 * @returns {number[][]} An array of all unique combinations summing to the target.
 *
 * @example
 * combinationSum([2, 3, 6, 7], 7); // Returns [[2, 2, 3], [7]]
 *
 * @see https://leetcode.com/problems/combination-sum/
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  const backtrack = (current: number[], remaining: number, start: number) => {
    if (remaining === 0) {
      results.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (remaining - candidates[i] < 0) continue;

      current.push(candidates[i]);
      backtrack(current, remaining - candidates[i], i); // Use the same element
      current.pop(); // Undo the last choice
    }
  };

  backtrack([], target, 0);
  return results;
}

/**
 * LeetCode Problem #131 - Palindrome Partitioning
 *
 * Given a string `s`, partition `s` such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of `s`.
 *
 * This function uses Backtracking to find all partitions.
 *
 * @param {string} s - The input string.
 * @returns {string[][]} An array of all palindrome partitions.
 *
 * @example
 * partition("aab"); // Returns [["a", "a", "b"], ["aa", "b"]]
 *
 * @see https://leetcode.com/problems/palindrome-partitioning/
 */
export function partition(s: string): string[][] {
  const results: string[][] = [];

  /**
   * Helper function to check if a string is a palindrome.
   * @param {string} str - The string to check.
   * @returns {boolean} True if `str` is a palindrome.
   */
  const isPalindrome = (str: string): boolean => {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  const backtrack = (current: string[], start: number) => {
    if (start === s.length) {
      results.push([...current]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      const substring = s.slice(start, end + 1);
      if (isPalindrome(substring)) {
        current.push(substring);
        backtrack(current, end + 1); // Explore further partitions
        current.pop(); // Undo the last choice
      }
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
