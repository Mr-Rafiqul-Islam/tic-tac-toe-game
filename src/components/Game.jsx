import React, { useState } from "react";
import { Board } from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMoves, setCurrentMoves] = useState(0);
  const isNextX = currentMoves % 2 === 0;
  const currentSquares = history[currentMoves];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMoves + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMoves(nextHistory.length - 1);
  };

  function jumpTo(nextMove) {
    setCurrentMoves(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="leading-5">
        <button className="text-xl" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="flex gap-4 items-start">
      <div>
        <Board squares={currentSquares} isNextX={isNextX} onPlay={handlePlay} />
      </div>
      <ul>{moves}</ul>
    </div>
  );
}
