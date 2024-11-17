import { useLanguageContext } from "./multiLanguageContext";
import { languageTypes } from "./model";

export const useMultiLanguageApp = () => {
  const { translatedContent, changeLanguage, language } = useLanguageContext();

  const onChangeLanguageClick = () => {
    changeLanguage(
      language === languageTypes.en ? languageTypes.es : languageTypes.en
    );
  };

  return {
    translatedContent,
    onChangeLanguageClick,
  };
};
