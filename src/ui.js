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
  let gridPlacement = ship.getGridPlacement();

  // if y coordinates are equal then it is horizontally placed ship
  if (gridPlacement[0][0] === gridPlacement[1][0]) {
    colorHorizontally(ship, gridPlacement);
  } else colorVertically(ship, gridPlacement);
}

function colorVertically(ship, gridPlacement) {
  let yCord = gridPlacement[0][0];
  let xCord = gridPlacement[0][1];

  if (yCord !== gridSize - 1) {
    document.getElementById(`${xCord},${yCord + 1}`).classList.add("hit");
    if (xCord === 0) {
      document.getElementById(`${xCord + 1},${yCord + 1}`).classList.add("hit");
    } else if (xCord === gridSize - 1) {
      document.getElementById(`${xCord - 1},${yCord + 1}`).classList.add("hit");
    } else {
      document.getElementById(`${xCord - 1},${yCord + 1}`).classList.add("hit");
      document.getElementById(`${xCord + 1},${yCord + 1}`).classList.add("hit");
    }
  }

  for (let y = yCord; y > yCord - ship.length; y--) {
    if (xCord === 0) {
      document.getElementById(`${xCord + 1},${y}`).classList.add("hit");
    } else if (xCord === gridSize - 1) {
      document.getElementById(`${xCord - 1},${y}`).classList.add("hit");
    } else {
      document.getElementById(`${xCord + 1},${y}`).classList.add("hit");
      document.getElementById(`${xCord - 1},${y}`).classList.add("hit");
    }
  }

  if (yCord - ship.length + 1 > 0) {
    document
      .getElementById(`${xCord},${yCord - ship.length}`)
      .classList.add("hit");
    if (xCord === 0) {
      document
        .getElementById(`${xCord} + 1,${yCord - ship.length}`)
        .classList.add("hit");
    } else if (xCord === gridSize - 1) {
      document
        .getElementById(`${xCord - 1},${yCord - ship.length}`)
        .classList.add("hit");
    } else {
      document
        .getElementById(`${xCord + 1},${yCord - ship.length}`)
        .classList.add("hit");
      document
        .getElementById(`${xCord - 1},${yCord - ship.length}`)
        .classList.add("hit");
    }
  }
}

function colorHorizontally(ship, gridPlacement) {
  let yCord = gridPlacement[0][0];
  let xCord = gridPlacement[0][1];

  if (xCord !== 0) {
    document.getElementById(`${xCord - 1},${yCord}`).classList.add("hit");
    if (yCord === 0) {
      document.getElementById(`${xCord - 1},${yCord + 1}`).classList.add("hit");
    } else if (yCord === gridSize - 1) {
      document.getElementById(`${xCord - 1},${yCord - 1}`).classList.add("hit");
    } else {
      document.getElementById(`${xCord - 1},${yCord + 1}`).classList.add("hit");
      document.getElementById(`${xCord - 1},${yCord - 1}`).classList.add("hit");
    }
  }

  for (let x = xCord; x < xCord + ship.length; x++) {
    if (yCord === 0) {
      document.getElementById(`${x},${yCord + 1}`).classList.add("hit");
    } else if (yCord === gridSize - 1) {
      document.getElementById(`${x},${yCord - 1}`).classList.add("hit");
    } else {
      document.getElementById(`${x},${yCord - 1}`).classList.add("hit");
      document.getElementById(`${x},${yCord + 1}`).classList.add("hit");
    }
  }

  if (xCord + ship.length < gridSize) {
    document
      .getElementById(`${xCord + ship.length},${yCord}`)
      .classList.add("hit");
    if (yCord === 0) {
      document
        .getElementById(`${xCord + ship.length},${yCord + 1}`)
        .classList.add("hit");
    } else if (yCord === gridSize - 1) {
      document
        .getElementById(`${xCord + ship.length},${yCord - 1}`)
        .classList.add("hit");
    } else {
      document
        .getElementById(`${xCord + ship.length},${yCord + 1}`)
        .classList.add("hit");
      document
        .getElementById(`${xCord + ship.length},${yCord - 1}`)
        .classList.add("hit");
    }
  }
}
