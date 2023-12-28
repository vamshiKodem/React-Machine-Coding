import { useState } from "react";

export const useAccordion = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onTitleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return {
    isVisible,
    onTitleClick,
  };
};
