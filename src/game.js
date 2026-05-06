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

// PLAYERS
const player = Player();
const npc = Player();
