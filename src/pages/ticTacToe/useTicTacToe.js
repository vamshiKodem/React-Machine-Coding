import { useState } from "react";

export const useTicTacToe = () => {
  const numbers = [
    { id: 0, value: "", isDisabled: false },
    { id: 1, value: "", isDisabled: false },
    { id: 2, value: "", isDisabled: false },
    { id: 3, value: "", isDisabled: false },
    { id: 4, value: "", isDisabled: false },
    { id: 5, value: "", isDisabled: false },
    { id: 6, value: "", isDisabled: false },
    { id: 7, value: "", isDisabled: false },
    { id: 8, value: "", isDisabled: false },
  ];

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [ticTacToeData, setTicTacToeData] = useState(numbers);
  const [xSelected, setXSelected] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const onBoxSelect = (id) => {
    const newData = ticTacToeData.map((data) => {
      if (data.id === id) {
        return {
          id: id,
          value: xSelected ? "X" : "O",
          isDisabled: true,
        };
      } else {
        return data;
      }
    });
    setTicTacToeData(newData);

    const win = check(newData, xSelected);
    if (win) {
      setShowResult(true);
      setTicTacToeData((prev) => {
        const newValue = prev.map((value) => ({ ...value, isDisabled: true }));
        return newValue;
      });
    }
    setXSelected(!xSelected);
  };

  const check = (board, selected) => {
    return winningCombination.some((combination) => {
      return combination.every((item) => {
        const selectedValue = selected ? "X" : "O";
        return board[item].value === selectedValue;
      });
    });
  };

  const onRestartClick = () => {
    setTicTacToeData(numbers);
  };

  return {
    ticTacToeData,
    onBoxSelect,
    showResult,
    xSelected,
    onRestartClick,
  };
};
