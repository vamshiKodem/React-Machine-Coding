import { useLanguageContext } from "./multiLanguageContext";

export const useMultiLanguageApp = () => {
  const { translatedContent, changeLanguage } = useLanguageContext();

  return {
    translatedContent,
    changeLanguage,
  };
};
