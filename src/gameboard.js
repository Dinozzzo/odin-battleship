export { Gameboard };

function Gameboard() {
  const ships = [];
  const missedAttacks = [];

  return {
    // RETURN THE ARRAY OF SHIPS
    ships,
    missedAttacks,

    // PLACE THE SHIP ON THE GAMEBOARD
    placeShip(ship, start, direction) {
      const coordinates = [];
      const [x, y] = start;

      if (direction === "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          const coord = [x + i, y];
          coordinates.push(coord);
        }
      }

      if (direction === "vertical") {
        for (let i = 0; i < ship.length; i++) {
          const coord = [x, y + i];
          coordinates.push(coord);
        }
      }

      ships.push({ ship, coordinates });
    },

    // RECEIVING ATTACKS
    receiveAttack(coordinates) {
      let hit = false;

      for (let i = 0; i < ships.length; i++) {
        const shipData = ships[i];

        for (let j = 0; j < shipData.coordinates.length; j++) {
          const coord = shipData.coordinates[j];

          if (coord[0] === coordinates[0] && coord[1] === coordinates[1]) {
            shipData.ship.hit();
            hit = true;
          }
        }
      }

      if (!hit) {
        missedAttacks.push(coordinates);
      }
    },

    allShipsSunk() {
      for (const shipData of ships) {
        if (shipData.ship.isSunk() !== true) {
          return false;
        }
      }

      return true;
    },
  };
}
