import { Trans, useTranslation } from "react-i18next"
import LanguageDetector from "./components/LanguageDetector"
import { useState } from "react"

function App() {
 const [selectedLang, setSetSelectedLang] = useState('')
const {t}=useTranslation()
const {line1}=t('description')

  return (
    <>
      <LanguageDetector {...{setSetSelectedLang}}/>
    <h1 className="text-3xl font-bold underline">
    {t('greeting')}
   
  
  </h1> <span>
      <Trans
      i18nKey={line1} // the key is which line or text we have to translate or give style
      values={{
        lang:selectedLang // using this our text is dynamic
        
      }}
      components={{1:<b/>}} // this we have used to give style to our dynamic text and we can use any custom component as well to style.

      />
    </span>
      {/* <p>
      {line1}
      </p> */}
  </>
  )
}

export default App
