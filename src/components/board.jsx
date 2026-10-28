
import { useState } from "react";
import { vocabulary } from "../data/vocabulary";

function Board({ category, ships }) {
  const rowWords = vocabulary[category];
  const columnWords = vocabulary.time;

  const [selectedSquares, setSelectedSquares] = useState([]);

  // Handle a student selecting a square
  function handleSquareClick(row, col) {
    const squareId = `${row}-${col}`;

    if (selectedSquares.includes(squareId)) {
      return;
    }

    setSelectedSquares([
      ...selectedSquares,
      squareId
    ]);
  }

  // Check whether a square contains a ship
  function isHit(squareId) {
    return ships.some((ship) => ship.includes(squareId));
  }

  function isShipSunk(ship) {
    
    return ship.every((square) => selectedSquares.includes(square));
  }

  const sunkShips = ships.filter((ship) =>
      isShipSunk(ship)
    );

    const lastSelectedSquare =
  selectedSquares[selectedSquares.length - 1];

const newlySunkShip = sunkShips.find((ship) =>
  ship.includes(lastSelectedSquare)
);
const gameWon =
  sunkShips.length === ships.length;

  {gameWon && (
  <div className="victory-message">
    <h1>🎉🏆 VICTORY! 🏆🎉</h1>
    <p>You sank the entire fleet!</p>
    <p>Excellent teamwork!</p>
  </div>
)}

  function getShipName(size) {
  if (size === 1) return "Tiny Ship";
  if (size === 2) return "Small Ship";
  if (size === 3) return "Medium Ship";
  if (size === 4) return "Large Ship";

  return "Unknown Ship";
}

  return (
    <div className="game-container">
      <div className="game-status">
        <h2>Ships Sunk: {sunkShips.length} / {ships.length}</h2>
      </div>

      {newlySunkShip && !gameWon && (
  <div className="ship-announcement">
    <span className="sinking-ship">🚢</span>

    <h2>
      You sunk a {getShipName(newlySunkShip.length)}!
    </h2>
  </div>
)}
      

    
    <div className="board">
      
      <div className="board-label"></div>

      {columnWords.map((word) => (
        <div className="board-label time-label" key={word}>
          {word}
        </div>
      ))}

      {rowWords.map((rowWord, rowIndex) => (
        <div className="board-row" key={rowWord}>
          <div className="board-label">
            {rowWord}
          </div>

          {columnWords.map((columnWord, colIndex) => {
            const squareId = `${rowIndex}-${colIndex}`;

            const isSelected =
              selectedSquares.includes(squareId);

            return (
              <button
                key={squareId}
                className={
                  isSelected
                    ? `board-cell selected ${
                        isHit(squareId) ? "hit" : "miss"
                      }`
                    : "board-cell"
                }
                onClick={() =>
                  handleSquareClick(rowIndex, colIndex)
                }
                disabled={isSelected}
                aria-label={`${rowWord}, ${columnWord}`}
              >
                {isSelected
                  ? (isHit(squareId) ? "💥" : "🌊")
                  : ""}
              </button>
            );
          })}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Board;
