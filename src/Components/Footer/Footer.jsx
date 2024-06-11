
import React from 'react'
import { useTranslation } from "react-i18next";
 import '../Main.css'
import FooteCss from './Footer.module.css'


function Footer() {
    const { t } = useTranslation();
   
    return (
        <footer className={FooteCss.FooterContainer}>
            <div className={FooteCss.Container}> 
            <li><a href="#AboutMe" className={FooteCss.LinkText}>{t("About")}</a></li>
            <li><a href="#Projects" className={FooteCss.LinkText}>{t("Projects")}</a></li>
            <li><a href="#Contact" className={FooteCss.LinkText}>{t("Contact")}</a></li>
            </div>
            <div className={FooteCss.Name}>
                <p>Steven Kühnl</p>
            </div>
            <div className={FooteCss.Copyright}>
                <p>Copyright © 2024 Steven Kühnl</p>
            </div>

               
        </footer>)
}

export default Footer
