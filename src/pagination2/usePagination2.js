import { useCallback, useMemo, useState } from "react";

import { mockData } from "./mockData";

export const usePagination2 = () => {
  const [data] = useState(mockData);
  const [selectedPage, setSelectedPage] = useState(1);

  const onNextClick = useCallback(() => {
    setSelectedPage((prev) => (prev === data.length / 10 ? prev : prev + 1));
  }, [data.length]);

  const onPreviousClick = useCallback(() => {
    setSelectedPage((prev) => (prev === 1 ? 1 : prev - 1));
  }, []);

  const onNumericButtonClick = (val) => {
    setSelectedPage(val);
  };

  const numericButtons = useMemo(() => {
    return Array(mockData.length / 10)
      .fill()
      .map((_, index) => index + 1);
  }, []);

  return {
    data,
    selectedPage,
    onNextClick,
    onPreviousClick,
    numericButtons,
    onNumericButtonClick,
  };
};
