import { gridSize } from "./constants";
import { gameboard } from "./constants";

export function createGameboard() {
  const gameboard = document.querySelector(".gameboard");
  for (let y = gridSize - 1; y >= 0; y--) {
    for (let x = 0; x < gridSize; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = `${x},${y}`;
      addListener(square);

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

function addListener(square) {
  square.addEventListener("click", () => {
    const id = square.id.split(",");
    const pos = [Number(id[0]), Number(id[1])];

    makeAttack(pos);
    square.classList.add("hit");

    if (gameboard.checkWinCondition()) {
      document.querySelector(".gameboard").classList.add("unclickable");
    }
  });
}

function makeAttack(pos) {
  let attack = gameboard.receiveAttack(pos);
  if (attack !== "miss" && attack.isSunk()) {
    colorAdjacentSquares(attack);
  }
}

function colorAdjacentSquares(ship) {
  let adjacentSquares = ship.getAdjacentSquares();

  for (let i = 0; i < adjacentSquares.length; i++) {
    let xCord = adjacentSquares[i][0];
    let yCord = adjacentSquares[i][1];

    document.getElementById(`${xCord},${yCord}`).classList.add("hit");
  }
}
