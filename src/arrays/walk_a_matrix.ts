// Input
const matrix = [[1], [2], [3]];

export function walkMatrix(matrix: number[][]) {
  let result: number[] = [];

  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  let startRow = 0;
  let startCol = 0;
  let endRow = rowCount - 1;
  let endCol = colCount - 1;

  while (endRow >= startRow && endCol >= startCol) {
    // walk left to right (top row), after this we can increment startRow
    for (let col = startCol; col <= endCol; col++) {
      const nodeInFirstRow = matrix[startRow][col];

      result.push(nodeInFirstRow);
    }

    startRow++;

    // walk top to bottom (last column), after this we can decrement endCol
    for (let row = startRow; row <= endRow; row++) {
      const nodeInLastCol = matrix[row][endCol];

      result.push(nodeInLastCol);
    }

    endCol--;

    if (endRow >= startRow) {
      // walk right to left (last row), after this we can decrement endRow
      for (let col = endCol; col >= startCol; col--) {
        const nodeInLastRow = matrix[endRow][col];

        result.push(nodeInLastRow);
      }
    }
    endRow--;

    if (endCol >= startCol) {
      // walk bottom to top (first row), after this we can increment startCol
      for (let row = endRow; row >= startRow; row--) {
        const nodeInFirstCol = matrix[row][startCol];

        result.push(nodeInFirstCol);
      }
    }

    startCol++;
  }

  return result;
}

console.log(walkMatrix(matrix));
