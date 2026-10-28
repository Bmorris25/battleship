
import { useState } from "react";
import { vocabulary } from "./data/vocabulary";
import Board from "./components/board";
import "./App.css";
import { generateShips } from "./utils/shipPlacement";


function testShips() {
  const ships = generateShips();
  console.log("Generated ships:", ships);
}


function App() {
  const [category, setCategory] = useState("sports");
  const [ships, setShips] = useState(() => generateShips());
  
  const [gameNumber, setGameNumber] = useState(0);
  function startNewGame() {
    setShips(generateShips());
    setGameNumber((previousNumber) => previousNumber + 1);
  }




  
return (
  <div className="app-container">
    <header className="game-header">
      <div className="header-top">
        <h1>🚢 ASL Battleship</h1>
      </div>

      <div className="header-controls">
        <div className="vocabulary-controls">
          <span>Vocabulary:</span>

          <button
            className={category === "sports" ? "active" : ""}
            onClick={() => setCategory("sports")}
          >
            Sports
          </button>

          <button
            className={category === "food" ? "active" : ""}
            onClick={() => setCategory("food")}
          >
            Food
          </button>
        </div>

        <button
          className="new-game-button"
          onClick={startNewGame}
        >
          ↻ New Game
        </button>
      </div>
    </header>

    <Board
      key={gameNumber}
      category={category}
      ships={ships}
    />
  </div>
);

}

export default App;
