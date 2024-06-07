import React from "react";
import { useTranslation } from "react-i18next";
import AboutMeCss from './AboutMe.module.css'
 


function AboutMe() {
     const { t } = useTranslation();

     return (
          <div className={AboutMeCss.Container} id="About">

               <h1 className={AboutMeCss.Header}>{t("AboutMeHeader")}</h1>
               <p className={AboutMeCss.Text}>{t("AboutMeText")}</p>


     
          </div>
     );
}



export default AboutMe;