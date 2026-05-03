import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

describe("Gameboard", () => {
  test("should record missed attacks when no ship is hit", () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack([2, 2]);

    expect(gameboard.missedAttacks.length).toBe(1);
    expect(gameboard.missedAttacks[0]).toEqual([2, 2]);
  });

  test("should NOT record a miss when a ship is hit", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);

    gameboard.placeShip(ship, [0, 0]);

    gameboard.receiveAttack([0, 0]);

    expect(gameboard.missedAttacks.length).toBe(0);

    test("should hit the correct ship when attacked at its coordinates", () => {
      const gameboard = Gameboard();
      const ship = Ship(3);

      gameboard.placeShip(ship, [0, 0]);

      gameboard.receiveAttack([0, 0]);

      expect(ship.hits).toBe(1);
    });

    test("should NOT hit a ship when attacking a different coordinate", () => {
      const gameboard = Gameboard();
      const ship = Ship(3);

      gameboard.placeShip(ship, [0, 0]);

      gameboard.receiveAttack([1, 1]);

      expect(ship.hits).toBe(0);
    });

    test("should return false if not all ships are sunk", () => {
      const gameboard = Gameboard();
      const ship = Ship(2);

      gameboard.placeShip(ship, [0, 0]);

      expect(gameboard.allShipsSunk()).toBe(false);
    });
  });

  test("should return true when all ships are sunk", () => {
    const gameboard = Gameboard();
    const ship = Ship(1);

    gameboard.placeShip(ship, [0, 0]);

    gameboard.receiveAttack([0, 0]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
