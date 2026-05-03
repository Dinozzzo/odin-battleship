export { Gameboard };
import { Ship } from "../src/ship.js";

function Gameboard() {
  const ships = [];
  const missedAttacks = [];
  return {
    // RETURN THE ARRAY OF SHIPS
    ships,
    missedAttacks,

    // PLACE THE SHIP ON THE GAMEBOARD
    placeShip(ship, coordinates, direction) {
      ships.push(ship);
    },

    // RECEIVING ATTACKS
    receiveAttack(coordinates) {
      missedAttacks.push(coordinates);
    },

    //
  };
}
