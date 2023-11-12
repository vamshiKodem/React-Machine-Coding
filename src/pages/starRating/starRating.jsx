import React, { useState } from "react";
import "./starRating.css";
import { AiTwotoneStar } from "react-icons/ai";
import { useStarRating } from "./useStarRating";

export const StarRating = () => {
  const { starData, selectedValue, onStarClick } = useStarRating();

  return (
    <div>
      {starData.map((data) => (
        <span key={data} onClick={() => onStarClick(data)}>
          <AiTwotoneStar
            className={`star-icon ${data <= selectedValue ? "active" : ""}`}
          />
        </span>
      ))}
    </div>
  );
};
