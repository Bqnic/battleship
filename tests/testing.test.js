import { Ship } from "../src/game";
import { Gameboard } from "../src/game";

describe("ship factory function", () => {
  test("creating invalid sized ships", () => {
    try {
      Ship(10);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe("Invalid size");
    }
  });

  test("testing hit function", () => {
    let ship = Ship(5);
    ship.hit();
    ship.hit();
    expect(ship.getHits()).toBe(2);
  });

  test("sinking ship", () => {
    let ship = Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});

describe("gameboard factory function", () => {
  test("creating gameboard that is 10x10", () => {
    let gameboard = Gameboard();
    expect(gameboard.arr[9][9]).toBe(null);
    expect(gameboard.arr[0][0]).toBe(null);
  });

  test("placing ships horizontally", () => {
    let gameboard = Gameboard();
    expect(gameboard.checkHorizontally(Ship(2), [0, 0])).toBeTruthy();
    expect(gameboard.checkHorizontally(Ship(3), [-1, 5])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(5), [1, 5])).toBe(true);
    expect(gameboard.checkHorizontally(Ship(5), [0, 10])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(5), [6, 6])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(5), [6, 5])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(1), [6, 5])).toBe(true);
    expect(gameboard.checkHorizontally(Ship(1), [0, 0])).toBe(true);
    expect(gameboard.checkHorizontally(Ship(1), [9, 9])).toBe(true);
    expect(gameboard.checkHorizontally(Ship(1), [10, 5])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(3), [7, 9])).toBe(true);
    expect(gameboard.checkHorizontally(Ship(4), [9, 7])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(4), [6, 9])).toBe(true);

    gameboard.placeHorizontally(Ship(5), [0, 0]);
    expect(gameboard.checkHorizontally(Ship(1), [0, 0])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(1), [4, 0])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(1), [3, 1])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(1), [6, 0])).toBe(true);
    expect(gameboard.checkHorizontally(Ship(1), [5, 0])).toBe(false);
    expect(gameboard.checkHorizontally(Ship(2), [5, 1])).toBe(false);
  });

  test("placing ships vertically", () => {
    let gameboard = Gameboard();
    expect(gameboard.checkVertically(Ship(5), [0, 0])).toBe(false);
    expect(gameboard.checkVertically(Ship(5), [0, 4])).toBe(true);

    gameboard.placeVertically(Ship(5), [0, 4]);
    expect(gameboard.checkVertically(Ship(1), [0, 5])).toBe(false);
    expect(gameboard.checkVertically(Ship(1), [0, 2])).toBe(false);
    expect(gameboard.checkVertically(Ship(1), [0, 4])).toBe(false);
    expect(gameboard.checkVertically(Ship(2), [0, 6])).toBe(false);
    expect(gameboard.checkVertically(Ship(1), [1, 5])).toBe(false);
  });

  test("attacking ships", () => {
    let gameboard = Gameboard();
    gameboard.placeHorizontally(Ship(1), [0, 0]);
    gameboard.receiveAttack[(0, 0)];
    expect(gameboard.arr[0][0].isSunk()).toBe(true);
  });
});
