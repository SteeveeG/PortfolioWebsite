import React, { useState } from "react";
import { useCookies } from "react-cookie";
import css from "./cookieConsent.module.css";
import {DeclinedGaCookie, initializeAnalytics} from "../Google/analytics";

const CookiesConsent = () => {
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
                    We use cookies to improve your experience. By using our website, you agree to our use of functional cookies.{" "}
                    <a href="/privacy-policy">Learn more</a>.
                </p>
                <div>
                    <button onClick={() => handleConsent(false)}>Decline</button>
                    <button onClick={() => handleConsent(true)}>Accept All</button>
                </div>
            </div>
        )
    );
};

export default CookiesConsent;
