import { gridSize, playerGameboard } from "./constants";
import { colorAdjacentSquares, updatePlayerGameboard } from "./ui";

export function AI() {
  let possibleMoves = [];
  let educatedMoves = [];

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      possibleMoves.push([x, y]);
    }
  }

  function getPossibleMoves() {
    return possibleMoves;
  }

  function setPossibleMoves(arr) {
    possibleMoves = arr;
  }

  function makeAttack() {
    if (educatedMoves.length === 0) makeRandomAttack();
    else makeEducatedAttack();
    if (playerGameboard.checkWinCondition())
      document.getElementById("ai").classList.add("unclickable");
  }

  function makeEducatedAttack() {
    while (educatedMoves.length > 0) {
      let move = educatedMoves.shift();
      if (
        possibleMoves.find((arr) => arr[0] === move[0] && arr[1] === move[1])
      ) {
        let attack = playerGameboard.receiveAttack(move);

        updatePlayerGameboard(move);

        if (attack !== "miss") {
          if (attack.isSunk()) {
            colorAdjacentSquares(attack, false);
            educatedMoves = [];
          } else {
            let correctPositions = attack.getGridPlacement();
            educatedMoves = correctPositions;
          }
        }

        possibleMoves.splice(
          possibleMoves.findIndex(
            (arr) => arr[0] === move[0] && arr[1] === move[1]
          ),
          1
        );

        break;
      }

      if (educatedMoves.length === 0) makeRandomAttack();
    }
  }

  function makeRandomAttack() {
    const moveIndex = Math.floor(Math.random() * possibleMoves.length);
    let attack = playerGameboard.receiveAttack(possibleMoves[moveIndex]);

    updatePlayerGameboard(possibleMoves[moveIndex]);

    if (attack !== "miss") {
      if (attack.isSunk()) colorAdjacentSquares(attack, false);
      else {
        fillEducatedMoves(possibleMoves[moveIndex]);
      }
    }

    possibleMoves.splice(moveIndex, 1);
  }

  function fillEducatedMoves(pos) {
    let xCord = pos[0];
    let yCord = pos[1];

    // possible cases:
    // 4 corners (2 paths)
    // x === 0 but not y, vice versa and same with gridSize - 1 (3 paths)
    // normal case (4 paths)

    if (xCord === 0) {
      educatedMoves.push([xCord + 1, yCord]);
      if (yCord === 0) {
        educatedMoves.push([xCord, yCord + 1]);
      } else if (yCord === gridSize - 1) {
        educatedMoves.push([xCord, yCord - 1]);
      } else {
        educatedMoves.push([xCord, yCord + 1]);
        educatedMoves.push([xCord, yCord - 1]);
      }
    } else if (xCord === gridSize - 1) {
      educatedMoves.push([xCord - 1, yCord]);
      if (yCord === 0) educatedMoves.push([xCord, yCord + 1]);
      else if (yCord === gridSize - 1) educatedMoves.push([xCord, yCord - 1]);
      else {
        educatedMoves.push([xCord, yCord + 1]);
        educatedMoves.push([xCord, yCord - 1]);
      }
    } else if (yCord === 0) {
      educatedMoves.push([xCord, yCord + 1]);
      educatedMoves.push([xCord - 1, yCord]);
      educatedMoves.push([xCord + 1, yCord]);
    } else if (yCord === gridSize - 1) {
      educatedMoves.push([xCord, yCord - 1]);
      educatedMoves.push([xCord - 1, yCord]);
      educatedMoves.push([xCord + 1, yCord]);
    } else {
      educatedMoves.push([xCord - 1, yCord]);
      educatedMoves.push([xCord + 1, yCord]);
      educatedMoves.push([xCord, yCord - 1]);
      educatedMoves.push([xCord, yCord + 1]);
    }
  }

  return { makeAttack, getPossibleMoves, setPossibleMoves };
}
