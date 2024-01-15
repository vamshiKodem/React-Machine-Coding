import { createContext, useContext, useEffect, useState } from "react";

import { content } from "./content";

const LanguageContext = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translatedContent = content[language];

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ translatedContent, changeLanguage, language }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
