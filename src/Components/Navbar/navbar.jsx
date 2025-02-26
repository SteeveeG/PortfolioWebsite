import React, { useState, useEffect, useRef } from "react";
import NavbarCss from './navbar.module.css'
import '../Main.css'
import { useTranslation } from "react-i18next";
import i18next from "../I18n/i18n";


function Navbar() {
    let Checkbox = useRef(null);
    useEffect(() => {
        function handleLanguageChange(lng) {
            document.body.classList.remove('en', 'de');
            document.body.classList.add(lng);
        }

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const [lang, setLang] = useState('en');

    const changeLanguage = (lng) => {
        setLang(lng);
        i18next.changeLanguage(lng);
    }
    const closeNavbar = () => {
        Checkbox.checked = false;
    }
    const { t } = useTranslation();

    return (
        <nav className={NavbarCss.nav}>
            <a className={NavbarCss.logo} href="/">Steven Kühnl</a>
            <input type="checkbox" id="toggle_button" ref={(Element) => Checkbox = Element} className={NavbarCss.togglebtn} />
            <label htmlFor="toggle_button" className={NavbarCss.togglebutton}>
                <span className={NavbarCss.bar} />
                <span className={NavbarCss.bar} />
                <span className={NavbarCss.bar} />
            </label>
            <ul className={NavbarCss.LiContainer}>
                <li className={NavbarCss.links}><a className={NavbarCss.LinkText} onClick={() => closeNavbar()} href="/#AboutMe">{t("About")}</a></li>
                <li className={NavbarCss.links}><a className={NavbarCss.LinkText} onClick={() => closeNavbar()} href="/#Projects">{t("Projects")}</a></li>
                <li className={NavbarCss.links}><a className={NavbarCss.LinkText} onClick={() => closeNavbar()} href="/#Contact">{t("Contact")}</a></li>
                <div className={NavbarCss.LanguageContainer}>
                    <input type="radio" id="De" name="language"
                        checked={lang === 'de'}
                        className={NavbarCss.RadioDe} onClick={() => closeNavbar()}
                        onChange={() => changeLanguage('de')} />
                    <label htmlFor="De" className={NavbarCss.De}>De</label>
                    <span className={NavbarCss.LanguageSelectedBar} ></span>
                </div>
                <div className={NavbarCss.LanguageContainer}>
                    <input type="radio"
                        id="En" className={NavbarCss.RadioEn} onClick={() => closeNavbar()}
                        name="language" checked={lang === 'en'} onChange={() => changeLanguage('en')} />
                    <label htmlFor="En" className={NavbarCss.En}>En</label>
                    <span className={NavbarCss.LanguageSelectedBar} ></span>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;