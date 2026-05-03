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
      ships.push({ ship, coordinates });
    },

    // RECEIVING ATTACKS
    receiveAttack(coordinates) {
      let hit = false;

      // CHECK IF SHIP IS AT THE POSITION
      for (let i = 0; i < ships.length; i++) {
        const shipData = ships[i];

        if (
          shipData.coordinates[0] === coordinates[0] &&
          shipData.coordinates[1] === coordinates[1]
        ) {
          shipData.ship.hit(); // ATTACK LANDED
          hit = true;
        }
      }

      // IF SHIP IS NOT ATTACKED
      if (!hit) {
        missedAttacks.push(coordinates);
      }
    },

    allShipsSunk() {},
  };
}
