import React, { useState } from "react";
import { useCookies } from "react-cookie";
import css from "./cookieConsent.module.css";

const CookiesConsent = () => {
    const [cookies, setCookie] = useCookies(["ga-consent"]);
    const [isVisible, setIsVisible] = useState(!cookies["ga-consent"]);

    const handleConsent = (consentGiven) => {
        if (consentGiven) {
            setCookie("ga-consent", true, { path: "/" });
            // Optional: Set weitere Cookie-Kategorien hier
        } else {
            setCookie("ga-consent", false, { path: "/" });
        }
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className={css.cookieConsent}>
                <p>
                    I use cookies to improve your experience. And improvise our Website. By using our website,
                    you agree to use our Functional cookies. {" "}
                    <a href={"/privacy-policy"}>Learn more</a>.
                </p>
                <div>
                    <button onClick={() => handleConsent(false)}>Decline</button>
                    <button onClick={() => handleConsent(true)}>Accept All</button>
                    {/* Optional: Add "Customize" button for granular control */}
                </div>
            </div>
        )
    );
};

export default CookiesConsent;
