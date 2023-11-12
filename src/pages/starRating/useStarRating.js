import { useState } from "react";

export const useStarRating = () => {
  const starData = [0, 1, 2, 3, 4];
  const [selectedValue, setSelectedValue] = useState(undefined);

  const onStarClick = (data) => {
    setSelectedValue(data);
  };

  return {
    starData,
    selectedValue,
    onStarClick,
  };
};
