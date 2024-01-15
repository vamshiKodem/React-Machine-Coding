import { useLanguageContext } from "./multiLanguageContext";

const languageTypes = {
  en: "en",
  es: "es",
};

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
