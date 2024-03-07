import React, { Component } from "react";
import './Nav.css'
import '../Main.css'
import { useTranslation } from "react-i18next";

// const [t,i18n] = useTranslation("global");
// const handleChangeLanguage = (lang) => {
//     i18n.handleChangeLanguage(lang);
// }

class Navbar extends Component {
    state = {}

    render() {
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
                    <li className="navli"><a className="navula Consolas" href="/home">About</a></li>
                    <li className="navli"><a className="navula Consolas" href="#">Projects</a></li>
                    <li className="navli"><a className="navula Consolas" href="#">Contact</a></li>
                    <div className="navli navDiv">
                        <input type="radio" id="De" name="language"    />
                        <label htmlFor="De" className="Consolas De">De</label>
                        <span className="LanguageSelectedBar" ></span>
                    </div>
                    <div className="navli navDiv">
                        <input type="radio" id="En" name="language" />
                        <label htmlFor="En" className="Consolas En">En</label>
                        <span className="LanguageSelectedBar" ></span>
                    </div>

                </ul>
            </nav>
        );
    }
}

export default Navbar;