const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const restartBtn = document.getElementById("restart-btn");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameEnded = false;

const checkWin = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return gameBoard[a];
    }
  }

  if (gameBoard.every((cell) => cell !== "")) {
    return "draw";
  }

  return null;
};

const handleClick = (cell) => {
  const cellIndex = cell.dataset.cell;
  if (gameBoard[cellIndex] || gameEnded) return;

  gameBoard[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;

  const winner = checkWin();
  if (winner) {
    gameEnded = true;
    if (winner === "draw") {
      status.textContent = "It's a draw!";
    } else {
      status.textContent = `Player ${winner} wins!`;
    }
    restartBtn.classList.remove("hidden");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => handleClick(cell));
});

restartBtn.addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  gameEnded = false;
  currentPlayer = "X";
  status.textContent = "Player X's turn";
  restartBtn.classList.add("hidden");
});
