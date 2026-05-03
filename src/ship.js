export { Ship };

function Ship(length) {
  return {
    length: length,
    hits: 0,

    hit() {
      this.hits++;
    },

    isSunk() {
      return this.hits === this.length;
    },
  };
}
