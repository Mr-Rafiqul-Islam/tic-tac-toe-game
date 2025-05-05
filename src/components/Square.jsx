import React from "react";

export const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="border h-16 w-16 m-1 border-gray-400"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
