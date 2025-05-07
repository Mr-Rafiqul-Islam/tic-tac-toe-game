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
      <div className="grid grid-cols-3">
        {
          squares.map((item,index)=>(
            <Square key={index} value={item} onSquareClick={() => handleClick(index)} />
          ))
        }
        {/* <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> */}
      </div>
    </>
  );
};
