import { useEffect, useState, useCallback } from "react";
import { imageData } from "./imageData";

export const useCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const onNextButtonClick = useCallback(() => {
    setSelectedImage(
      selectedImage === imageData.length - 1 ? 0 : selectedImage + 1
    );
  }, [selectedImage]);

  const onPreviousButtonClick = () => {
    setSelectedImage(
      selectedImage === 0 ? imageData.length - 1 : selectedImage - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onNextButtonClick();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onNextButtonClick, selectedImage]);

  return {
    imageData,
    selectedImage,
    onNextButtonClick,
    onPreviousButtonClick,
  };
};
