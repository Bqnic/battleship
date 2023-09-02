import "./style.css";
import { Gameboard } from "./game";
import { createGameboard, populateGameboard } from "./ui";

let gameboard = Gameboard();
gameboard.placeShipsRandomly();

createGameboard();
populateGameboard(gameboard.arr);
