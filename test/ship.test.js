import { Ship } from "../src/ship.js";

describe("Ship", () => {
  // INITIALIZE SINK
  test("should initialize with correct length and 0 hits", () => {
    const ship = Ship(3);

    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
  });

  // IS SHIP SUNK ?
  test("the ship(3) is not sunk", () => {
    const ship = Ship(3);

    expect(ship.isSunk()).toBe(false);
  });

  // SHIP GET HITS ONCE
  test("hit() should increase hits by 1", () => {
    const ship = Ship(3);

    ship.hit();

    expect(ship.hits).toBe(1);
  });

  // IS SHIP SUNK ?
  test("the ship(3) is not sunk after 1 hit", () => {
    const ship = Ship(3);

    ship.hit();

    expect(ship.isSunk()).toBe(false);
  });

  // SHIP GET HIT THREE TIME
  test("hit() should increase hits by 3", () => {
    const ship = Ship(3);

    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.hits).toBe(3);
  });

  // IS SHIP SUNK ?
  test("the ship(3) is sunk", () => {
    const ship = Ship(3);

    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
  });
});
