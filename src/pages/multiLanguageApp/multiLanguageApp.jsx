import React from "react";

import "./multiLanguageApp.css";
import { useMultiLanguageApp } from "./useMultiLanguageApp";

export const MultiLanguageApp = () => {
  const { translatedContent, onChangeLanguageClick } = useMultiLanguageApp();

  return (
    <div className="multiLanguage-container">
      <h1>{translatedContent.title}</h1>
      <p>{translatedContent.description}</p>
      <button onClick={onChangeLanguageClick}>Change Language</button>
    </div>
  );
};
