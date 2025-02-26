import React from 'react';
import {useCookies} from "react-cookie";
import Navbar from "../../Components/Navbar/navbar";
import LanguageHelper from '../../Components/LanguageHelper/LanguageHelper';
import CookieManager from "../../Components/cookieManager/cookieManager";
import CookiesConsent from "../../components/cookiesHandler/cookiesConsent.jsx";
import css from "./privacyPolicy.module.css"

const privacyPolicy = () => {
    const [cookies] = useCookies(["ga-consent"]);
    const isGaConsentCookieSet = cookies["ga-consent"] === undefined;

    return (
        <div className={css.container}>
            <Navbar />
            <LanguageHelper />
            <CookieManager />
            {isGaConsentCookieSet && <CookiesConsent />}
        </div>

    )
}
export default privacyPolicy;


