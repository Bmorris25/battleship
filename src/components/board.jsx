
import { vocabulary } from "../data/vocabulary";

function Board({ category }) {
  const rowWords = vocabulary[category];
  const columnWords = vocabulary.time;

  return (
    <div className="board">
      <div className="board-label"></div>

      {columnWords.map((word) => (
        <div className="board-label" key={word}>
          {word}
        </div>
      ))}

      {rowWords.map((rowWord) => (
        <div className="board-row" key={rowWord}>
          <div className="board-label">
            {rowWord}
          </div>

          {columnWords.map((columnWord) => (
            <div
              className="board-cell"
              key={`${rowWord}-${columnWord}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
