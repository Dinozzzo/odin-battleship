import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { renderBoard } from "./dom.js";

// CREATE PLAYERS
const player = Player();
const npc = Player();

// CREATE BOARD FOR BOTH PLAYERS
const playerBoard = document.querySelector("#player-board");
const npcBoard = document.querySelector("#npc-board");

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

// DISPLAY THE GAME AT START
renderBoard(player.gameboard, playerBoard);
renderBoard(npc.gameboard, npcBoard);

// PLAYABLE GAME
let currentPlayer = "player";

const turnDisplay = document.querySelector("#turn-display");

function setupNpcBoardListeners() {
  const npcCells = npcBoard.querySelectorAll(".cell");

  npcCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (currentPlayer !== "player") return;

      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);

      const alreadyAttacked = npc.gameboard.attackedCoordinates.some(
        (coord) => coord[0] === x && coord[1] === y,
      );

      if (alreadyAttacked) return;

      npc.gameboard.receiveAttack([x, y]);

      renderBoard(player.gameboard, playerBoard);
      renderBoard(npc.gameboard, npcBoard);

      // REATTACH LISTENERS AFTER RERENDER
      setupNpcBoardListeners();

      // CHECK IF NPC LOST
      if (npc.gameboard.allShipsSunk()) {
        endGame("PLAYER");
        return;
      }

      currentPlayer = "npc";
      turnDisplay.textContent = "Computer's turn";

      // NPC RANDOM ATTACK
      setTimeout(() => {
        const attackX = Math.floor(Math.random() * 10);
        const attackY = Math.floor(Math.random() * 10);

        player.gameboard.receiveAttack([attackX, attackY]);

        renderBoard(player.gameboard, playerBoard);
        renderBoard(npc.gameboard, npcBoard);

        // REATTACH LISTENERS AFTER SECOND RERENDER
        setupNpcBoardListeners();

        // CHECK IF PLAYER LOST
        if (player.gameboard.allShipsSunk()) {
          endGame("COMPUTER");
          return;
        }

        currentPlayer = "player";
        turnDisplay.textContent = "Player's turn";
      }, 0);
    });
  });
}

setupNpcBoardListeners();

// DISPLAY WINNER AND RESTART
const gameOverScreen = document.querySelector("#game-over-screen");
const winnerText = document.querySelector("#winner-text");
const restartButton = document.querySelector("#restart-button");

function endGame(winner) {
  gameOverScreen.classList.remove("hidden");
  winnerText.textContent = `${winner} WINS`;
}

restartButton.addEventListener("click", () => {
  location.reload();
});
