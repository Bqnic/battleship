import { gridSize } from "./constants";
export function Ship(length, hits = 0) {
  if (length > 5 || length < 1) throw new Error("Invalid size");

  function hit() {
    hits += 1;
  }

  function getHits() {
    return hits;
  }

  function isSunk() {
    return length === hits;
  }

  return { length, getHits, hit, isSunk };
}

export function Gameboard() {
  let arr = [];

  for (let i = 0; i < gridSize; i++) {
    arr[i] = [];
    for (let j = 0; j < gridSize; j++) {
      arr[i][j] = null;
    }
  }

  function receiveAttack(pos) {
    let xCord = pos[0];
    let yCord = pos[1];

    if (arr[yCord][xCord]) {
      let ship = arr[yCord][xCord];
      ship.hit();
      return true;
    }
    return false;
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

      for (let x = xCord; x < xCord + ship.length; x++) {
        arr[yCord][x] = ship;
      }
      return true;
    }
    return false;
  }

  // ship is placed from up to down
  function placeVertically(ship, pos) {
    if (checkVertically(ship, pos) === true) {
      let xCord = pos[0];
      let yCord = pos[1];

      for (let y = yCord; y > yCord - ship.length; y--) arr[y][xCord] = ship;
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

    if (yCord !== gridSize - 1) {
      if (arr[yCord + 1][xCord]) return false;
      if (xCord === 0) {
        if (arr[yCord + 1][xCord + 1]) return false;
      } else if (xCord === gridSize - 1) {
        if (arr[yCord + 1][xCord - 1]) return false;
      } else {
        if (arr[yCord + 1][xCord - 1]) return false;
        if (arr[yCord + 1][xCord + 1]) return false;
      }
    }

    for (let y = yCord; y > yCord - ship.length; y--) {
      if (arr[y][xCord]) return false;
      if (xCord === 0) {
        if (arr[y][xCord + 1]) return false;
      } else if (xCord === gridSize - 1) {
        if (arr[y][xCord - 1]) return false;
      } else if (arr[y][xCord - 1] || arr[y][xCord + 1]) return false;
    }

    if (yCord - ship.length + 1 > 0) {
      if (arr[yCord - ship.length][xCord]) return false;
      if (xCord === 0) {
        if (arr[yCord - ship.length][xCord + 1]) return false;
      } else if (xCord === gridSize - 1) {
        if (arr[yCord - ship.length][xCord - 1]) return false;
      } else {
        if (arr[yCord - ship.length][xCord + 1]) return false;
        if (arr[yCord - ship.length][xCord - 1]) return false;
      }
    }

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

    if (xCord !== 0) {
      if (arr[yCord][xCord - 1]) return false;
      if (yCord === 0) {
        if (arr[yCord + 1][xCord - 1]) return false;
      } else if (yCord === gridSize - 1) {
        if (arr[yCord - 1][xCord - 1]) return false;
      } else {
        if (arr[yCord + 1][xCord - 1]) return false;
        if (arr[yCord - 1][xCord - 1]) return false;
      }
    }

    for (let x = xCord; x < xCord + ship.length; x++) {
      if (arr[yCord][x]) return false;

      if (yCord === 0) {
        if (arr[yCord + 1][x]) return false;
      } else if (yCord === gridSize - 1) {
        if (arr[yCord - 1][x]) return false;
      } else if (arr[yCord - 1][x] || arr[yCord + 1][x]) return false;
    }

    if (xCord + ship.length <= gridSize) {
      if (arr[yCord][xCord + ship.length]) return false;
      if (yCord === 0) {
        if (arr[yCord + 1][xCord + ship.length]) return false;
      } else if (yCord === gridSize - 1) {
        if (arr[yCord - 1][xCord + ship.length]) return false;
      } else {
        if (arr[yCord + 1][xCord + ship.length]) return false;
        if (arr[yCord - 1][xCord + ship.length]) return false;
      }
    }

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
  };
}
