import React, { useState, useEffect } from "react";
import './Nav.css'
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
        <nav className="g nav">
            <a className="g logo " href="/home">Steven Kühnl</a>
            <input type="checkbox" id="toggle_button" />
            <label htmlFor="toggle_button" className="toggle_button">
                <span className="bar" ></span>
                <span className="bar" ></span>
                <span className="bar" ></span>
            </label>
            <ul className="navul navula navWrapper">
                <li className="navli"><a className="navula Consolas" href="/home">{t("NavAbout")}</a></li>
                <li className="navli"><a className="navula Consolas" href="#">{t("NavProjects")}</a></li>
                <li className="navli"><a className="navula Consolas" href="#">{t("NavContact")}</a></li>
                <div className="navli navDiv">
                    <input type="radio" id="De" name="language" checked={lang === 'de'} onChange={() => changeLanguage('de')} />
                    <label htmlFor="De" className="Consolas De">De</label>
                    <span className="LanguageSelectedBar" ></span>
                </div>
                <div className="navli navDiv">
                    <input type="radio" id="En" name="language" checked={lang === 'en'} onChange={() => changeLanguage('en')} />
                    <label htmlFor="En" className="Consolas En">En</label>
                    <span className="LanguageSelectedBar" ></span>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
