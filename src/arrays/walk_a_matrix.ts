// Input
const matrix = [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6],
];

// Output: walkMatrix(matrix)
const output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function walkMatrix(matrix: number[][]) {
  let result: number[] = [];

  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  let startRow = 0;
  let startCol = 0;
  let endRow =  rowCount - 1;
  let endCol = colCount - 1;

  while (endRow >= startRow && endCol >= startCol) {
    // walk left to right (top row), after this we can increment startRow
    for (let column = startCol; column <= endCol; column++) {
      const nodeInFirstRow = matrix[startRow][column];

      result.push(nodeInFirstRow)
    }

    startRow++;

    // walk top to bottom (last column), after this we can decrement endCol
    for (let row = startRow; row <= endRow; row++) {
      const nodeInLastColumn = matrix[row][endRow];

      result.push(nodeInLastColumn)
    }

    endCol--;

    // walk right to left (last row), after this we can decrement endRow
    for (let column = endCol; column >= startCol; column--) {
      const nodeInLastRow = matrix[endRow][column];
      result.push(nodeInLastRow)
    }

    endRow--;

    // walk bottom to top (first row), after this we can increment startCol
    for (let row = endRow; row >= startRow; row--) {
      const nodeInFirstRow = matrix[row][0];
      result.push(nodeInFirstRow)
    }

    startCol++;
  }

  return result;
}

console.log(walkMatrix(matrix));
