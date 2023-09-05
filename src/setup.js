import { ai, aiGameboard, playerGameboard } from "./constants";
import { createGameboards, populateGameboard } from "./ui";

export function setupGame() {
  const uiPlayerBoard = document.getElementById("player");
  const uiAiBoard = document.getElementById("ai");

  uiAiBoard.classList.remove("unclickable");

  while (uiPlayerBoard.firstChild)
    uiPlayerBoard.removeChild(uiPlayerBoard.firstChild);
  while (uiAiBoard.firstChild) uiAiBoard.removeChild(uiAiBoard.firstChild);

  aiGameboard.cleanGameboard();
  playerGameboard.cleanGameboard();
  ai.resetPossibleMoves();

  aiGameboard.placeShipsRandomly();
  playerGameboard.placeShipsRandomly();

  createGameboards();
  populateGameboard(playerGameboard.getGameboardArr(), true);
  populateGameboard(aiGameboard.getGameboardArr(), false);
}
