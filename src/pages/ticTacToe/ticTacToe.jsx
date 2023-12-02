import React from "react";
import "./ticTacToe.css";
import { useTicTacToe } from "./useTicTacToe";

export const TicTacToe = () => {
  const { ticTacToeData, onBoxSelect, showResult, xSelected, onRestartClick } =
    useTicTacToe();

  return (
    <div className="ticTac-container">
      {showResult ? (
        <>
          <h1>{`Result: ${!xSelected ? "X" : "O"} Won`}</h1>
          <button onClick={onRestartClick}>Restart</button>
        </>
      ) : null}
      <div className="ticTac-grid">
        {ticTacToeData.map((number) => (
          <button
            key={number.id}
            className="ticTac-box"
            onClick={() => onBoxSelect(number.id)}
            disabled={number.isDisabled}
          >
            {number.value}
          </button>
        ))}
      </div>
    </div>
  );
};
