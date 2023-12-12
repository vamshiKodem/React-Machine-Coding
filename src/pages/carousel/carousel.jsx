import React from "react";
import "./carousel.css";
import { useCarousel } from "./useCarousel";

export const Carousel = () => {
  const { imageData, selectedImage, onNextButtonClick, onPreviousButtonClick } =
    useCarousel();

  return (
    <div className="carousel-container">
      <button onClick={onPreviousButtonClick}>Previous</button>
      {imageData.map((url, index) => (
        <img
          key={url}
          src={url}
          className={`carousel-image ${
            selectedImage === index ? "show" : "hide"
          }`}
        />
      ))}
      <button onClick={onNextButtonClick}>Next</button>
    </div>
  );
};
