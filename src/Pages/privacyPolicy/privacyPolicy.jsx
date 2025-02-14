import React from 'react';
import {useCookies} from "react-cookie";
import Navbar from "../../Components/Navbar/navbar";
import LanguageHelper from '../../Components/LanguageHelper/LanguageHelper';
import Footer from '../../Components/Footer/Footer';
import CookieManager from "../../Components/cookieManager/cookieManager";
import CookiesConsent from "../../components/cookiesHandler/cookiesConsent.jsx";
import { useTranslation } from "react-i18next";


const privacyPolicy = () => {
    const { t } = useTranslation();
    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <div >
            <Navbar />
            <LanguageHelper />
            <CookieManager />
            {!cookies.cookieConsent && <CookiesConsent />}
            <Footer />
        </div>

    )
}
export default privacyPolicy;


