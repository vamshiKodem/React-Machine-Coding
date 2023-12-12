import { useEffect, useState } from "react";
import { imageData } from "./imageData";

export const useCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const onNextButtonClick = () => {
    setSelectedImage(
      selectedImage === imageData.length - 1 ? 0 : selectedImage + 1
    );
  };

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
  }, [selectedImage]);

  return {
    imageData,
    selectedImage,
    onNextButtonClick,
    onPreviousButtonClick,
  };
};
