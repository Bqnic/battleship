import "./style.css";
import { aiGameboard, playerGameboard } from "./constants";
import { createGameboards, populateGameboard } from "./ui";

aiGameboard.placeShipsRandomly();
playerGameboard.placeShipsRandomly();

createGameboards();
populateGameboard(playerGameboard.arr, true);
populateGameboard(aiGameboard.arr, false);
