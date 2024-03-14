import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import AboutMeCss from './AboutMe.module.css'
 


function AboutMe() {
     const { t, i18n } = useTranslation();

     return (
          <div className={AboutMeCss.Container}>

               <h1 className={AboutMeCss.Header}>{t("AboutMeHeader")}</h1>
               <p className={AboutMeCss.Text}>{t("AboutMeText")}</p>

              <p className={AboutMeCss.Contact}>{t("AboutMeContact")}</p>
     
          </div>
     );
}



export default AboutMe;