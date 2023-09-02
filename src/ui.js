import { gridSize } from "./constants";
export function createGameboard() {
  const gameboard = document.querySelector(".gameboard");
  for (let y = gridSize - 1; y >= 0; y--) {
    for (let x = 0; x < gridSize; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = `${x},${y}`;

      gameboard.appendChild(square);
    }
  }
}

export function populateGameboard(arr) {
  for (let y = gridSize - 1; y >= 0; y--) {
    for (let x = 0; x < gridSize; x++) {
      if (arr[y][x]) {
        const shipSquare = document.getElementById(`${x},${y}`);
        shipSquare.classList.add("ship");
      }
    }
  }
}
