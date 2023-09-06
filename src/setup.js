import { ai, aiGameboard, playerGameboard } from "./constants";
import {
  createAiGameboard,
  createPlayerGameboard,
  populateGameboard,
} from "./ui";
import { Ship } from "./game";
import { gridSize } from "./constants";

let shipLengths;
let nextShipLength;
let setupSquares;
let isHorizontal;

export function setupGame() {
  const uiPlayerBoard = document.getElementById("player");
  const uiAiBoard = document.getElementById("ai");

  uiAiBoard.classList.remove("unclickable");

  uiPlayerBoard.classList.remove("active");
  uiAiBoard.classList.remove("active");

  while (uiPlayerBoard.firstChild)
    uiPlayerBoard.removeChild(uiPlayerBoard.firstChild);
  while (uiAiBoard.firstChild) uiAiBoard.removeChild(uiAiBoard.firstChild);

  aiGameboard.cleanGameboard();
  playerGameboard.cleanGameboard();
  ai.resetPossibleMoves();
  setupSquares = [];
  shipLengths = [5, 4, 3, 3, 2];
  nextShipLength = shipLengths.shift();
  isHorizontal = true;

  createSetupGameboard();
  createButtons();
}

function startGame() {
  aiGameboard.placeShipsRandomly();

  createPlayerGameboard();
  createAiGameboard();
  populateGameboard(playerGameboard.getGameboardArr(), true);
  populateGameboard(aiGameboard.getGameboardArr(), false);
}

function createSetupGameboard() {
  const setupGameboard = document.getElementById("setup");

  for (let y = gridSize - 1; y >= 0; y--) {
    for (let x = 0; x < gridSize; x++) {
      const setupSquare = document.createElement("div");
      setupSquare.classList.add("square");
      setupSquare.id = `${x},${y}`;
      setupSquares.push(setupSquare);

      setupGameboard.appendChild(setupSquare);
    }
  }

  addSetupListener();
}

function createButtons() {
  const btnDiv = document.createElement("div");
  const horizontalBtn = document.createElement("button");
  const verticalBtn = document.createElement("button");
  const randomizerBtn = document.createElement("button");

  horizontalBtn.classList.add("placementBtn", "clicked");
  verticalBtn.classList.add("placementBtn");
  randomizerBtn.classList.add("randomizerBtn");
  horizontalBtn.textContent = "Horizontal";
  verticalBtn.textContent = "Vertical";
  randomizerBtn.textContent = "Start game with random placement";

  btnDiv.id = "btnDiv";

  addListenersToButtons(horizontalBtn, verticalBtn, randomizerBtn);

  btnDiv.appendChild(horizontalBtn);
  btnDiv.appendChild(verticalBtn);
  btnDiv.appendChild(randomizerBtn);

  document.querySelector(".container").appendChild(btnDiv);
}

function deleteButtons() {
  const btnDiv = document.getElementById("btnDiv");
  while (btnDiv.firstChild) btnDiv.removeChild(btnDiv.firstChild);
  document.querySelector(".container").removeChild(btnDiv);
}

function addListenersToButtons(horizontalBtn, verticalBtn, randomizerBtn) {
  horizontalBtn.addEventListener("click", () => {
    if (isHorizontal === false) {
      verticalBtn.classList.remove("clicked");
      horizontalBtn.classList.add("clicked");
      isHorizontal = true;
    }
  });

  verticalBtn.addEventListener("click", () => {
    if (isHorizontal === true) {
      verticalBtn.classList.add("clicked");
      horizontalBtn.classList.remove("clicked");
      isHorizontal = false;
    }
  });

  randomizerBtn.addEventListener("click", () => {
    playerGameboard.cleanGameboard();
    playerGameboard.placeShipsRandomly();
    deleteSetupGameboard();
    deleteButtons();
    startGame();
  });
}

function setNextShipLength(length) {
  nextShipLength = length;
}

function mouseEnterEffect() {
  hoverEffect(this, nextShipLength);
}

function mouseLeaveEffect() {
  removeHoverEffect(this, nextShipLength);
}

function mouseClickEffect() {
  applyHoverEffect(this, nextShipLength);
}

function addSetupListener() {
  setupSquares.forEach((square) => {
    square.addEventListener("mouseenter", mouseEnterEffect);
    square.addEventListener("mouseleave", mouseLeaveEffect);
    square.addEventListener("click", mouseClickEffect);
  });
}

function removeSetupListener() {
  setupSquares.forEach((square) => {
    square.removeEventListener("mouseenter", mouseEnterEffect);
    square.removeEventListener("mouseleave", mouseLeaveEffect);
    square.removeEventListener("click", mouseClickEffect);
  });
}

function hoverEffect(square, length) {
  if (isHorizontal) horizontalHover(square, length);
  else verticalHover(square, length);
}

function horizontalHover(square, length) {
  let id = square.id.split(",");
  let xCord = Number(id[0]);
  let yCord = Number(id[1]);

  for (let i = 0; i < length; i++) {
    if (
      document.getElementById(`${xCord + i},${yCord}`) &&
      setupSquares.includes(document.getElementById(`${xCord + i},${yCord}`))
    )
      document.getElementById(`${xCord + i},${yCord}`).style.backgroundColor =
        "green";
  }
}

function verticalHover(square, length) {
  let id = square.id.split(",");
  let xCord = Number(id[0]);
  let yCord = Number(id[1]);

  for (let i = 0; i < length; i++) {
    if (
      document.getElementById(`${xCord},${yCord - i}`) &&
      setupSquares.includes(document.getElementById(`${xCord},${yCord - i}`))
    )
      document.getElementById(`${xCord},${yCord - i}`).style.backgroundColor =
        "green";
  }
}

function removeHoverEffect(square, length) {
  if (isHorizontal) horizontalRemoveHover(square, length);
  else verticalRemoveHover(square, length);
}

function horizontalRemoveHover(square, length) {
  let id = square.id.split(",");
  let xCord = Number(id[0]);
  let yCord = Number(id[1]);

  for (let i = 0; i < length; i++) {
    if (document.getElementById(`${xCord + i},${yCord}`))
      document.getElementById(`${xCord + i},${yCord}`).style.background =
        "none";
  }
}

function verticalRemoveHover(square, length) {
  let id = square.id.split(",");
  let xCord = Number(id[0]);
  let yCord = Number(id[1]);

  for (let i = 0; i < length; i++) {
    if (document.getElementById(`${xCord},${yCord - i}`))
      document.getElementById(`${xCord},${yCord - i}`).style.background =
        "none";
  }
}

function applyHoverEffect(square, length) {
  let placed = false;
  if (isHorizontal) placed = horizontalApplyHover(square, length);
  else placed = verticalApplyHover(square, length);

  if (placed !== false) continueOrStopPlacement();
}

function horizontalApplyHover(square, length) {
  let id = square.id.split(",");
  let xCord = Number(id[0]);
  let yCord = Number(id[1]);

  for (let i = 0; i < length; i++)
    if (!document.getElementById(`${xCord + i},${yCord}`)) return false;

  removeSetupListener();

  let ship = Ship(length);
  playerGameboard.placeHorizontally(ship, [xCord, yCord]);

  for (let i = 0; i < length; i++) {
    document.getElementById(`${xCord + i},${yCord}`).style.backgroundColor =
      "green";

    let index = setupSquares.indexOf(
      document.getElementById(`${xCord + i},${yCord}`)
    );

    setupSquares.splice(index, 1);

    document.getElementById(`${xCord + i},${yCord}`).id = `${
      xCord + i
    }${yCord}`;
  }

  removeAdjacentSquaresFromArray(ship);
}

function verticalApplyHover(square, length) {
  let id = square.id.split(",");
  let xCord = Number(id[0]);
  let yCord = Number(id[1]);

  for (let i = 0; i < length; i++)
    if (!document.getElementById(`${xCord},${yCord - i}`)) return false;

  removeSetupListener();

  let ship = Ship(length);
  playerGameboard.placeVertically(ship, [xCord, yCord]);

  for (let i = 0; i < length; i++) {
    document.getElementById(`${xCord},${yCord - i}`).style.backgroundColor =
      "green";

    let index = setupSquares.indexOf(
      document.getElementById(`${xCord},${yCord - i}`)
    );

    setupSquares.splice(index, 1);

    document.getElementById(`${xCord},${yCord - i}`).id = `${xCord}${
      yCord - i
    }`;
  }

  removeAdjacentSquaresFromArray(ship);
}

function deleteSetupGameboard() {
  const setupGameboard = document.getElementById("setup");
  while (setupGameboard.firstChild)
    setupGameboard.removeChild(setupGameboard.firstChild);
}

function removeAdjacentSquaresFromArray(ship) {
  let adjacentSquares = ship.getAdjacentSquares();
  for (let i = 0; i < adjacentSquares.length; i++) {
    let xCord = adjacentSquares[i][0];
    let yCord = adjacentSquares[i][1];

    let index = setupSquares.indexOf(
      document.getElementById(`${xCord},${yCord}`)
    );
    if (index !== -1) setupSquares.splice(index, 1);

    if (document.getElementById(`${xCord},${yCord}`))
      document.getElementById(`${xCord},${yCord}`).id = `${xCord}${yCord}`;
  }
}

function continueOrStopPlacement() {
  if (shipLengths.length > 0) {
    setNextShipLength(shipLengths.shift());
    addSetupListener();
  } else {
    deleteSetupGameboard();
    deleteButtons();
    startGame();
  }
}
