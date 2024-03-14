import React, { useState, useEffect } from "react";
import NavbarCss from './navbar.module.css'
import '../Main.css'
import { useTranslation } from "react-i18next";
import i18next from "../I18n/i18n";

function Navbar() {
    const [lang, setLang] = useState('en'); 

    const changeLanguage = (lng) => {
        setLang(lng);
        i18next.changeLanguage(lng);
    }

    const { t } = useTranslation();

    return (
        <nav className={NavbarCss.nav}>
            <a className={NavbarCss.logo} href="/home">Steven Kühnl</a>
            <input type="checkbox" id="toggle_button" className={NavbarCss.togglebtn} />
            <label htmlFor="toggle_button" className={NavbarCss.togglebutton}>
                <span className={NavbarCss.bar} />
                <span className={NavbarCss.bar} />
                <span className={NavbarCss.bar} />
            </label>
            <ul className={NavbarCss.LiContainer}>
                <li className={NavbarCss.links}><a className={NavbarCss.LinkText} href="#">{t("About")}</a></li>
                <li className={NavbarCss.links}><a className={NavbarCss.LinkText} href="#">{t("Projects")}</a></li>
                <li className={NavbarCss.links}><a className={NavbarCss.LinkText} href="#">{t("Contact")}</a></li>
                <div className={NavbarCss.LanguageContainer}>
                    <input type="radio" id="De" name="language"
                     checked={lang === 'de'}
                     className={NavbarCss.RadioDe}
                      onChange={() => changeLanguage('de')} />
                    <label htmlFor="De" className={NavbarCss.De}>De</label>
                    <span className={NavbarCss.LanguageSelectedBar} ></span>
                </div>
                <div className={NavbarCss.LanguageContainer}>
                    <input type="radio"
                     id="En"     className={NavbarCss.RadioEn}
                     name="language" checked={lang === 'en'} onChange={() => changeLanguage('en')} />
                    <label htmlFor="En" className={NavbarCss.En}>En</label>
                    <span className={NavbarCss.LanguageSelectedBar} ></span>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;