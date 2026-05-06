import { Gameboard } from "./gameboard.js";
export { Player };

function Player() {
  const gameboard = Gameboard();
  return {
    gameboard,
  };
}
