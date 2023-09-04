import { ai, gridSize } from "./constants";
import { aiGameboard } from "./constants";

export function createGameboards() {
  const aiGameboard = document.getElementById("ai");
  const playerGameboard = document.getElementById("player");

  for (let y = gridSize - 1; y >= 0; y--) {
    for (let x = 0; x < gridSize; x++) {
      const aiSquare = document.createElement("div");
      aiSquare.classList.add("square");
      aiSquare.id = `${x},${y}`;
      addListener(aiSquare);

      aiGameboard.appendChild(aiSquare);

      const playerSquare = document.createElement("div");
      playerSquare.classList.add("square");
      playerSquare.id = `${x}${y}`;

      playerGameboard.appendChild(playerSquare);
    }
  }
}

export function populateGameboard(arr, player) {
  for (let y = gridSize - 1; y >= 0; y--) {
    for (let x = 0; x < gridSize; x++) {
      if (arr[y][x]) {
        let shipSquare;
        if (player === true) shipSquare = document.getElementById(`${x}${y}`);
        else shipSquare = document.getElementById(`${x},${y}`);
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

    if (aiGameboard.checkWinCondition()) {
      document.getElementById("ai").classList.add("unclickable");
    }

    ai.makeAttack();
  });
}

function makeAttack(pos) {
  let attack = aiGameboard.receiveAttack(pos);
  if (attack !== "miss" && attack.isSunk()) {
    colorAdjacentSquares(attack, true);
  }
}

export function colorAdjacentSquares(ship, playersAttack) {
  let adjacentSquares = ship.getAdjacentSquares();
  let possibleMoves = ai.getPossibleMoves();

  for (let i = 0; i < adjacentSquares.length; i++) {
    let xCord = adjacentSquares[i][0];
    let yCord = adjacentSquares[i][1];

    if (playersAttack)
      document.getElementById(`${xCord},${yCord}`).classList.add("hit");
    else {
      document.getElementById(`${xCord}${yCord}`).classList.add("hit");

      let index = possibleMoves.findIndex(
        (move) => move[0] === xCord && move[1] === yCord
      );
      if (index !== -1) possibleMoves.splice(index, 1);
    }
  }
}
