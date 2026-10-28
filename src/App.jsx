
import { useState } from "react";
import { vocabulary } from "./data/vocabulary";
import Board from "./components/board";
import "./App.css";

function App() {
  const [category, setCategory] = useState("sports");

  return (
    <div>
      <h1>ASL Battleship</h1>

      <h2>Choose Your Vocabulary</h2>

      <button onClick={() => setCategory("sports")}>
        Sports
      </button>

      <button onClick={() => setCategory("food")}>
        Food
      </button>

      <Board category={category} />
    </div>
  );
}

export default App;
