import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

describe("Gameboard", () => {
  test("Length of array `ships` should be 1", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);

    gameboard.placeShip(ship, [0, 0], "horizontal");

    // SHIP IS PLACED
    expect(gameboard.ships.length).toBe(1);
  });

  test("should record a missed attack when no ship is present", () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack([0, 0]);

    // MISSED ATTACK
    expect(gameboard.missedAttacks.length).toBe(1);
  });
  // LANDED ATTACK
  test("should received a landed attack when ship is present", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);

    expect(ship.hits).toBe(1);
  });
});
