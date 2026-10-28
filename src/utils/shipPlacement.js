
const BOARD_SIZE = 10;

// Two of ships size 1, two ships of size 2, one of size 3, and one of size 4
const SHIP_SIZES = [1, 1, 2, 2, 3, 4];

export function generateShips() {
  const ships = [];
  const occupiedSquares = new Set();

  // Generate each ship
  for (const size of SHIP_SIZES) {
    let placed = false;

    // Keep trying until we find a valid position
    while (!placed) {
      // Randomly choose horizontal or vertical
      const horizontal = Math.random() < 0.5;

      // Generate a starting row
      const row = Math.floor(
        Math.random() *
          (horizontal ? BOARD_SIZE : BOARD_SIZE - size + 1)
      );

      // Generate a starting column
      const col = Math.floor(
        Math.random() *
          (horizontal ? BOARD_SIZE - size + 1 : BOARD_SIZE)
      );

      // Store the squares occupied by this ship
      const squares = [];

      for (let i = 0; i < size; i++) {
        const squareRow = horizontal ? row : row + i;
        const squareCol = horizontal ? col + i : col;

        squares.push(`${squareRow}-${squareCol}`);
      }

      // Check if any squares overlap existing ships
      const overlaps = squares.some((square) =>
        occupiedSquares.has(square)
      );

      // Place the ship if no overlap exists
      if (!overlaps) {
        squares.forEach((square) => {
          occupiedSquares.add(square);
        });

        ships.push(squares);
        placed = true;
      }
    }
  }

  return ships;
}
