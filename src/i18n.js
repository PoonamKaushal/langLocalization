import i18n from "i18next";
import LangaueDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import arabicData from "../src/utils/ar.json";
import frenchData from "../src/utils/fr.json";
import punjabiData from "../src/utils/pn.json";
import hindiData from "../src/utils/hi.json";
import englishData from "../src/utils/en.json";

// this is how we intialize i18next instance

i18n
  .use(LangaueDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "pn", // default value of language
    fallbackLng: "en", // fallback value of language if we don't have any language object then this value of language will be seen.
    returnObjects: true, // used to return nested objects in the translation object.
    resources: {
      en: {
        translation: englishData,
      },
      hi: {
        translation: hindiData,
      },
      pn: {
        translation: punjabiData,
      },
      fr: {
        translation: frenchData,
      },
      ar: {
        translation: arabicData,
      },
    },
  });
