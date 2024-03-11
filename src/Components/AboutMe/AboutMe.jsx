import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import './AboutMe.css'
import '../Main.css'



function AboutMe() {
     const { t, i18n } = useTranslation();

     return (
          <div className="AboutMepos">

               <h1 className="Segoe AboutMeHeader">{t("AboutMeHeader")}</h1>
               <p className="Consolas Aboutmetext">{t("AboutMeText")}</p>

              <p className="Consolas AboutmeContact">{t("AboutMeContact")}</p>
     
          </div>
     );
}



export default AboutMe;