import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import './AboutMe.css'
import '../Main.css'



function AboutMe() {
     const { t, i18n } = useTranslation();

     return (
          <div className="AboutMepos">

               <h1 className="Segoe AboutMeHeader">About Me</h1>
               <p className="Consolas Aboutmetext">{t('AboutMe.Intro')}</p>
               {/* <p className="Consolas Aboutmetext">Hi, ich bin ein 19 jähriger Full stack Azubi Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>   */}
          </div>
     );
}



export default AboutMe;