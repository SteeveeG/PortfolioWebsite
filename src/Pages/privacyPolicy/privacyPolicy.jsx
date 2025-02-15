import React from 'react';
import {useCookies} from "react-cookie";
import Navbar from "../../Components/Navbar/navbar";
import LanguageHelper from '../../Components/LanguageHelper/LanguageHelper';
import CookieManager from "../../Components/cookieManager/cookieManager";
import CookiesConsent from "../../components/cookiesHandler/cookiesConsent.jsx";
import css from "./privacyPolicy.module.css"
import { useTranslation } from "react-i18next";


const privacyPolicy = () => {
    const { t } = useTranslation();
    const [cookies] = useCookies(["ga-consent"]);
    return (
        <div className={css.container}>
            <Navbar />
            <LanguageHelper />
            <CookieManager />
            {!cookies["ga-consent"] && <CookiesConsent />}
        </div>

    )
}
export default privacyPolicy;


