import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageDetector = ({ setSetSelectedLang}) => {
 
  const languages = [
    {
      code: "en",
      lang: "English",
    },
    {
      code: "hi",
      lang: "Hindi",
    },
    {
      code: "pn",
      lang: "Punjabi",
    },
    {
      code: "fr",
      lang: "French",
    },
    {
      code: "ar",
      lang: "Arabic",
    },
  ];
  const {i18n}=useTranslation()

  const changeLanguage=(code,lang)=>{
    i18n.changeLanguage(code)
    setSetSelectedLang(lang)
  }

  useEffect(() => {
  document.body.dir=i18n.dir() //  this handles the languages having direction from right to left.
  }, [i18n,i18n.language])
  
  return (
    <div>
      {languages.map(({ code, lang }) => (
        <>
          <button 
        
          className={code===i18n.language?'!bg-blue-500 text-white border border-blue-600 rounded-sm':'bg-white border border-black rounded-sm'}
           key={code} 
           onClick={()=>changeLanguage(code,lang)}>{lang}</button>
        </>
      ))}
    </div>
  );
};

export default LanguageDetector;
