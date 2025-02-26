import React from 'react'
import { useTranslation } from "react-i18next";
import '../Main.css'
import FooterCss from './Footer.module.css'


function Footer() {
    const { t } = useTranslation();
   
    return (
        <footer className={FooterCss.FooterContainer}>
            <div>
            <div className={FooterCss.Container}>
            <li>
                <a href="/#AboutMe" className={FooterCss.LinkText}>{t("About")}</a>
                <a href="/#Projects" className={FooterCss.LinkText}>{t("Projects")}</a>
                <a href="/#Contact" className={FooterCss.LinkText}>{t("Contact")}</a>
                <a href="/privacy-policy" className={FooterCss.LinkText}>{t("PrivacyPolicy")}</a>
            </li>
            </div>
            <div className={FooterCss.Name}>
                <p>Steven Kühnl</p>
            </div>
            </div>
            <div className={FooterCss.Copyright}>
                <p>Copyright © 2025 Steven Kühnl</p>
            </div>

               
        </footer>)
}

export default Footer
