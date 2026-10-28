
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
    <div>
      <h1>ASL Battleship</h1>
       <button
          className="new-game-button"
          onClick={startNewGame}>
          🚢 New Game
        </button>
      <h2>Choose Your Vocabulary</h2>

      <button onClick={() => setCategory("sports")}>
        Sports
      </button>

      <button onClick={() => setCategory("food")}>
        Food
      </button>

      
            

      <Board
        key={gameNumber}
        category={category}
        ships={ships}
      />
    </div>
  );
}

export default App;
