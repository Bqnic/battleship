import { gridSize } from "./constants";

export function Ship(length, hits = 0) {
  if (length > 5 || length < 1) throw new Error("Invalid size");

  let gridPlacement;
  let adjacentSquares;

  function hit() {
    hits += 1;
  }

  function getHits() {
    return hits;
  }

  function isSunk() {
    return length === hits;
  }

  function getGridPlacement() {
    return gridPlacement;
  }

  function getAdjacentSquares() {
    return adjacentSquares;
  }

  function setGridPlacement(arr) {
    gridPlacement = arr;
  }

  function setAdjacentSquares(arr) {
    adjacentSquares = arr;
  }

  return {
    length,
    getHits,
    hit,
    isSunk,
    getGridPlacement,
    setGridPlacement,
    getAdjacentSquares,
    setAdjacentSquares,
  };
}

export function Gameboard() {
  let arr = [];
  let drowned = 0;

  for (let i = 0; i < gridSize; i++) {
    arr[i] = [];
    for (let j = 0; j < gridSize; j++) {
      arr[i][j] = null;
    }
  }

  function checkWinCondition() {
    // there are 17 ship squares, if all of them are drowned then the game is over
    return drowned === 17;
  }

  function receiveAttack(pos) {
    let xCord = pos[0];
    let yCord = pos[1];

    if (arr[yCord][xCord]) {
      let ship = arr[yCord][xCord];
      ship.hit();
      drowned++;
      return ship;
    }
    return "miss";
  }

  function placeShipsRandomly() {
    let shipArr = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

    while (shipArr.length > 0) {
      let pos = getRandomPosition();
      let ship = shipArr.pop();
      if (isHorizontal() === true) {
        if (placeHorizontally(ship, pos) === false) shipArr.push(ship);
      } else {
        if (placeVertically(ship, pos) === false) shipArr.push(ship);
      }
    }
  }

  function getRandomPosition() {
    let xCord = Math.round(Math.random() * 10);
    let yCord = Math.round(Math.random() * 10);

    return [xCord, yCord];
  }

  function isHorizontal() {
    let num = Math.round(Math.random());

    return num === 0;
  }

  // pos is array with x and y coordinate of the grid
  // ship is placed from left to right
  function placeHorizontally(ship, pos) {
    if (checkHorizontally(ship, pos) === true) {
      let xCord = pos[0];
      let yCord = pos[1];
      let gridPlacement = [];

      for (let x = xCord; x < xCord + ship.length; x++) {
        arr[yCord][x] = ship;
        gridPlacement.push([x, yCord]);
      }

      ship.setGridPlacement(gridPlacement);
      return true;
    }
    return false;
  }

  // ship is placed from up to down
  function placeVertically(ship, pos) {
    if (checkVertically(ship, pos) === true) {
      let xCord = pos[0];
      let yCord = pos[1];
      let gridPlacement = [];

      for (let y = yCord; y > yCord - ship.length; y--) {
        arr[y][xCord] = ship;
        gridPlacement.push([xCord, y]);
      }

      ship.setGridPlacement(gridPlacement);
      return true;
    }
    return false;
  }

  function checkVertically(ship, pos) {
    let xCord = pos[0];
    let yCord = pos[1];

    if (
      xCord < 0 ||
      xCord >= gridSize ||
      yCord < ship.length - 1 ||
      yCord >= gridSize
    )
      return false;

    let adjacentSquares = [];

    if (yCord !== gridSize - 1) {
      if (arr[yCord + 1][xCord]) return false;
      adjacentSquares.push([xCord, yCord + 1]);
      if (xCord === 0) {
        if (arr[yCord + 1][xCord + 1]) return false;
        adjacentSquares.push([xCord + 1, yCord + 1]);
      } else if (xCord === gridSize - 1) {
        if (arr[yCord + 1][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord + 1]);
      } else {
        if (arr[yCord + 1][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord + 1]);
        if (arr[yCord + 1][xCord + 1]) return false;
        adjacentSquares.push([xCord + 1, yCord + 1]);
      }
    }

    for (let y = yCord; y > yCord - ship.length; y--) {
      if (arr[y][xCord]) return false;

      if (xCord === 0) {
        if (arr[y][xCord + 1]) return false;
        adjacentSquares.push([xCord + 1, y]);
      } else if (xCord === gridSize - 1) {
        if (arr[y][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, y]);
      } else {
        if (arr[y][xCord + 1]) return false;
        adjacentSquares.push([xCord + 1, y]);
        if (arr[y][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, y]);
      }
    }

    if (yCord - ship.length + 1 > 0) {
      if (arr[yCord - ship.length][xCord]) return false;
      adjacentSquares.push([xCord, yCord - ship.length]);
      if (xCord === 0) {
        if (arr[yCord - ship.length][xCord + 1]) return false;
        adjacentSquares.push([xCord + 1, yCord - ship.length]);
      } else if (xCord === gridSize - 1) {
        if (arr[yCord - ship.length][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord - ship.length]);
      } else {
        if (arr[yCord - ship.length][xCord + 1]) return false;
        adjacentSquares.push([xCord + 1, yCord - ship.length]);
        if (arr[yCord - ship.length][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord - ship.length]);
      }
    }

    ship.setAdjacentSquares(adjacentSquares);
    return true;
  }

  function checkHorizontally(ship, pos) {
    let xCord = pos[0];
    let yCord = pos[1];

    if (
      yCord < 0 ||
      yCord >= gridSize ||
      xCord < 0 ||
      xCord > gridSize - ship.length
    )
      return false;

    let adjacentSquares = [];

    if (xCord !== 0) {
      if (arr[yCord][xCord - 1]) return false;
      adjacentSquares.push([xCord - 1, yCord]);
      if (yCord === 0) {
        if (arr[yCord + 1][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord + 1]);
      } else if (yCord === gridSize - 1) {
        if (arr[yCord - 1][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord - 1]);
      } else {
        if (arr[yCord + 1][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord + 1]);
        if (arr[yCord - 1][xCord - 1]) return false;
        adjacentSquares.push([xCord - 1, yCord - 1]);
      }
    }

    for (let x = xCord; x < xCord + ship.length; x++) {
      if (arr[yCord][x]) return false;

      if (yCord === 0) {
        if (arr[yCord + 1][x]) return false;
        adjacentSquares.push([x, yCord + 1]);
      } else if (yCord === gridSize - 1) {
        if (arr[yCord - 1][x]) return false;
        adjacentSquares.push([x, yCord - 1]);
      } else {
        if (arr[yCord + 1][x]) return false;
        adjacentSquares.push([x, yCord + 1]);
        if (arr[yCord - 1][x]) return false;
        adjacentSquares.push([x, yCord - 1]);
      }
    }

    if (xCord + ship.length < gridSize) {
      if (arr[yCord][xCord + ship.length]) return false;
      adjacentSquares.push([xCord + ship.length, yCord]);
      if (yCord === 0) {
        if (arr[yCord + 1][xCord + ship.length]) return false;
        adjacentSquares.push([xCord + ship.length, yCord + 1]);
      } else if (yCord === gridSize - 1) {
        if (arr[yCord - 1][xCord + ship.length]) return false;
        adjacentSquares.push([xCord + ship.length, yCord - 1]);
      } else {
        if (arr[yCord + 1][xCord + ship.length]) return false;
        adjacentSquares.push([xCord + ship.length, yCord + 1]);
        if (arr[yCord - 1][xCord + ship.length]) return false;
        adjacentSquares.push([xCord + ship.length, yCord - 1]);
      }
    }

    ship.setAdjacentSquares(adjacentSquares);
    return true;
  }

  return {
    arr,
    checkHorizontally,
    placeHorizontally,
    placeVertically,
    checkVertically,
    placeShipsRandomly,
    receiveAttack,
    checkWinCondition,
  };
}
