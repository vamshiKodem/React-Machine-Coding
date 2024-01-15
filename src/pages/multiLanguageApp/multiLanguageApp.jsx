import React from "react";

import "./multiLanguageApp.css";
import { useMultiLanguageApp } from "./useMultiLanguageApp";

export const MultiLanguageApp = () => {
  const { translatedContent, changeLanguage } = useMultiLanguageApp();

  return (
    <div className="multiLanguage-container">
      <h1>{translatedContent.title}</h1>
      <p>{translatedContent.description}</p>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
};
