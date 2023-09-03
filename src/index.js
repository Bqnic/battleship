import "./style.css";
import { gameboard } from "./constants";
import { createGameboard, populateGameboard } from "./ui";

gameboard.placeShipsRandomly();

createGameboard();
populateGameboard(gameboard.arr);
