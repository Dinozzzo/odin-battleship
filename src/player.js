import { Gameboard } from "../src/gameboard.js";

function Player() {
  const gameboard = Gameboard();
  return {
    gameboard,
  };
}

const player = Player();
const npc = Player();
