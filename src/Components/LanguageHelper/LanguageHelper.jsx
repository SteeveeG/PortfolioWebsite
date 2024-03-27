import React from 'react'
import { useTranslation } from "react-i18next";
import LanguageHelperCss from "./LanguageHelper.module.css"
import arrow from "../../Assets/Svg/Arrow2.svg"


function LanguageHelper(){
     const { t, i18n } = useTranslation();
     const Arrow = document.body.className === 'de'? LanguageHelperCss.deArrow : LanguageHelperCss.enArrow;
  return ( 
      <div className={LanguageHelperCss.Container}>
          <img src={arrow} className={Arrow} 
          alt="an Arrow Pointing at the change Language RadioButtons"/>
          <p className={LanguageHelperCss.Text}>
              {t("LanguageHelperText")}
          </p>
      </div>)
}

export default LanguageHelper