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

// CREATE PLAYERS SHIPS
const playerCarrier = Ship(5);
const playerBattleship = Ship(4);
const playerCruiser = Ship(3);
const playerSubmarine = Ship(3);
const playerDestroyer = Ship(2);

// CREATE NPC SHIPS
const npcCarrier = Ship(5);
const npcBattleship = Ship(4);
const npcCruiser = Ship(3);
const npcSubmarine = Ship(3);
const npcDestroyer = Ship(2);

// PLACE THE PLAYERS SHIPS
player.gameboard.placeShip(playerCarrier, [2, 3], "horizontal");
player.gameboard.placeShip(playerBattleship, [2, 5], "horizontal");
player.gameboard.placeShip(playerCruiser, [1, 7], "vertical");
player.gameboard.placeShip(playerSubmarine, [7, 9], "horizontal");
player.gameboard.placeShip(playerDestroyer, [9, 4], "vertical");

// PLACE THE NPC SHIPS
npc.gameboard.placeShip(npcCarrier, [0, 0], "horizontal");
npc.gameboard.placeShip(npcBattleship, [4, 2], "vertical");
npc.gameboard.placeShip(npcCruiser, [7, 1], "horizontal");
npc.gameboard.placeShip(npcSubmarine, [2, 7], "vertical");
npc.gameboard.placeShip(npcDestroyer, [8, 5], "horizontal");
