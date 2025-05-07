import React from "react";
import { Square } from "./Square";
import { calculateWinner } from "../lib/helper";

export const Board = ({ squares, isNextX, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    console.log("clicked");
    const nextSquares = squares.slice();
    nextSquares[i] = isNextX ? "X" : "O";
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  return (
    <>
      <h3 className="text-xl ml-1">
        {winner
          ? `Winner: ${winner} 🥳🎉`
          : `Next Player: ${isNextX ? "X" : "O"}`}
      </h3>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};
