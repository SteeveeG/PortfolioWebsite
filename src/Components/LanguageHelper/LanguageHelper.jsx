import React from 'react'
import { useTranslation } from "react-i18next";
import "./LanguageHelper.css"
import arrow from "../../Assets/Svg/Arrow2.svg"


function LanguageHelper(){
     const { t, i18n } = useTranslation();
  return (
     <div className="LanguageHelperPos">
          <p className="LanguageHelperText">
          <img src={arrow} className="LanguageArrow" alt="an Arrow Pointing at the change Language RadioButtons" />
          {t("LanguageHelperText")}
          </p>
     </div>)
}

export default LanguageHelper