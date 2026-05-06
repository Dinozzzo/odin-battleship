import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

// CREATE BOARD FOR BOTH PLAYERS
const playerBoard = document.querySelector("#player-board");
const npcBoard = document.querySelector("#npc-board");

function renderBoard(container) {
  for (let i = 0; i < 100; i++) {
    const element = document.createElement("div");
    element.classList.add("cell");
    container.appendChild(element);
  }
}

renderBoard(playerBoard);
renderBoard(npcBoard);

// CREATE PLAYERS
const player = Player();
const npc = Player();

// CREATE SHIPS
const carrier = Ship(5);
const battleship = Ship(4);
const cruiser = Ship(3);
const submarine = Ship(3);
const destroyer = Ship(2);

// PLACE THE SHIPS
player.gameboard.placeShip();
