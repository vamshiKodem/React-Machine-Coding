import { useRef, useState } from "react";

export const useStopwatch = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    timerRef.current = clearInterval(timerRef.current);
  };

  const onStartClick = () => {
    startTimer();
  };

  const onResetClick = () => {
    stopTimer();
    setTimer(0);
  };

  const onPauseClick = () => {
    stopTimer();
  };

  const hours = Math.floor(timer / 3600)
    .toString()
    .padStart(2, "0");

  const minutes = Math.floor((timer % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const seconds = Math.floor(timer % 60)
    .toString()
    .padStart(2, "0");

  return {
    hours,
    minutes,
    seconds,
    onStartClick,
    onResetClick,
    onPauseClick,
  };
};
