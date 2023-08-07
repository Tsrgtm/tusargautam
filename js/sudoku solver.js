function solveSudoku() {
  const grid = [];
  const sudokuGrid = document.getElementById("sudoku-grid");

  for (let i = 0; i < 9; i++) {
    grid.push([]);
    for (let j = 0; j < 9; j++) {
      const cellValue =
        sudokuGrid.rows[i].cells[j].querySelector("input").value;
      grid[i].push(cellValue === "" ? 0 : parseInt(cellValue));
    }
  }

  if (isValidSudoku(grid)) {
    if (solve(grid)) {
      updateSudokuGrid(grid);
    } else {
      alert("Invalid Sudoku puzzle. Please check your input.");
    }
  } else {
    alert("Invalid Sudoku puzzle. Please check your input.");
  }
}

function solve(grid) {
  const emptyCell = findEmptyCell(grid);
  if (!emptyCell) {
    return true; // Sudoku is solved
  }

  const [row, col] = emptyCell;

  for (let num = 1; num <= 9; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;

      if (solve(grid)) {
        return true;
      }

      grid[row][col] = 0; // Backtrack
    }
  }

  return false; // Unsolved
}

function isSafe(grid, row, col, num) {
  return (
    !usedInRow(grid, row, num) &&
    !usedInColumn(grid, col, num) &&
    !usedInBox(grid, row - (row % 3), col - (col % 3), num)
  );
}

function usedInRow(grid, row, num) {
  return grid[row].includes(num);
}

function usedInColumn(grid, col, num) {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(grid, startRow, startCol, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[startRow + i][startCol + j] === num) {
        return true;
      }
    }
  }
  return false;
}

function findEmptyCell(grid) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
}

function updateSudokuGrid(grid) {
  const sudokuGrid = document.getElementById("sudoku-grid");

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudokuGrid.rows[i].cells[j].querySelector("input").value = grid[i][j];
    }
  }
}

// Helper function to check if a Sudoku puzzle is valid
function isValidSudoku(grid) {
  // Check rows and columns
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== 0 && rowSet.has(grid[i][j])) {
        return false;
      }
      rowSet.add(grid[i][j]);

      if (grid[j][i] !== 0 && colSet.has(grid[j][i])) {
        return false;
      }
      colSet.add(grid[j][i]);
    }
  }

  // Check 3x3 boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const boxSet = new Set();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (
            grid[i + row][j + col] !== 0 &&
            boxSet.has(grid[i + row][j + col])
          ) {
            return false;
          }
          boxSet.add(grid[i + row][j + col]);
        }
      }
    }
  }

  return true;
}

// Helper function to create the Sudoku grid
function createSudokuGrid() {
  const sudokuGrid = document.getElementById("sudoku-grid");
  for (let i = 0; i < 9; i++) {
    const row = sudokuGrid.insertRow();
    for (let j = 0; j < 9; j++) {
      const cell = row.insertCell();
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = "1";
      input.classList.add("sudoku-input");
      cell.appendChild(input);
    }
  }
}

// Create the Sudoku grid when the page loads
createSudokuGrid();


function resetGrid() {
  const sudokuGrid = document.getElementById("sudoku-grid");

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudokuGrid.rows[i].cells[j].querySelector("input").value = "";
    }
  }

  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameEnded = false;
}