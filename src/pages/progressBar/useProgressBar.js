import { useEffect, useState } from "react";

export const useProgressBar = () => {
  const WIDTH = 400;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((val) => val + 1);
    }, 10);

    if (percentage >= WIDTH) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  const onStartClick = () => {};

  return {
    percentage,
    WIDTH,
    onStartClick,
  };
};
