import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import css from "./cookieConsent.module.css";
import {DeclinedGaCookie, initializeAnalytics} from "../Google/analytics.js";

const CookiesConsent = () => {
    const { t } = useTranslation();
    const [cookies, setCookie, removeCookie] = useCookies(["ga-consent"]);
    const [isVisible, setIsVisible] = useState(!cookies["ga-consent"]);

    const handleConsent = (consentGiven) => {
        if (consentGiven) {
            initializeAnalytics();
            setCookie("ga-consent", true, { path: "/", maxAge: 31536000 }); // 1 Jahr gültig
        } else {
            DeclinedGaCookie();
            setCookie("ga-consent", false, { path: "/", maxAge: 0 });
            window[`ga-disable-${import.meta.env.VITE_APP_GA_TRACKING_ID}`] = true;
        }
        setIsVisible(false); // Verstecke die Consent-Nachricht
    };

    return (
        isVisible && (
            <div className={css.cookieConsent}>
                <p>
                    {t("CookieBannerText")}
                    <a href="/privacy-policy">{t("LearnMore")}</a>.
                </p>
                <div>
                    <button onClick={() => window.location.href="/privacy-policy"}>{t("ConfigureCookies")}</button>
                    <button onClick={() => handleConsent(true)}>{t("AcceptAll")}</button>
                </div>
            </div>
        )
    );
};

export default CookiesConsent;
