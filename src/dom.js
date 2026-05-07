export function renderBoard(gameboard, container) {
  for (let i = 0; i < 100; i++) {
    const element = document.createElement("div");
    element.classList.add("cell");

    const x = i % 10;
    const y = Math.trunc(i / 10);
    const coordinates = [x, y];

    for (let j = 0; j < gameboard.ships.length; j++) {
      const shipData = gameboard.ships[j];

      for (let k = 0; k < shipData.coordinates.length; k++) {
        const shipCoord = shipData.coordinates[k];

        if (
          shipCoord[0] === coordinates[0] &&
          shipCoord[1] === coordinates[1]
        ) {
          element.classList.add("ship");
        }
      }
    }

    container.appendChild(element);
  }
}
