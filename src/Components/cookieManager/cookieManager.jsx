import React, {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import css from "./cookieManager.module.css";
import { initializeAnalytics, deleteGaCookie } from "../Google/analytics.js";
import { fetchEnvVars } from "../../ultis/fetchEnvVars";

const CookieManager = () => {
    const { t } = useTranslation();
    const [trackingId, setTrackingId] = useState(null);

    useEffect(() => {
        fetchEnvVars().then(envVars => {
            setTrackingId(envVars.trackingId);
        });
    }, []);


    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    const [cookies, setCookie, removeCookie] = useCookies(["ga-consent"]);
    const [settings, setSettings] = useState({
        analytics: getCookie('ga-consent') === 'true', // Ensure boolean value
    });
    const [showManager, setShowManager] = useState(false);

    const handleConsentCh = (key, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    };

    const savePreferences = () => {
        setShowManager(false);
        if (settings.analytics) {
            initializeAnalytics();
            setCookie("ga-consent", 'true', { path: "/", maxAge: 31536000 }); // Ensure cookie is set as a string
        } else {
            deleteGaCookie();
            setCookie("ga-consent", 'false', { path: "/", maxAge: 100 });
            window[`ga-disable-${trackingId}`] = true;
        }
    };

    const cookieDoc = [
        {title: t("CookieName") , text: t("AnalyticsCookies")},
        {title: t("Description") , text: t("CookiesDescription")},
        {title: t("Duration") , text: t("CookiesDuration")},
        {title: t("Receiver") , text: t("CookiesReceiver")},
    ]




    const GetCookiesShowManager = () => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            analytics: getCookie('ga-consent') === 'true', // Update settings on open
        }));
        setShowManager(true);
    };

    return (
        <div className={css.cookieManager}>
            <button onClick={GetCookiesShowManager}>{t("ManageCookies")}</button>
            {showManager && (
                <div className={css.popup}>
                    <h2>{t("CookiePreferences")}</h2>
                    <p>{t("AdjustCookiesPreferences")}</p>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.analytics}
                                onChange={(e) => handleConsentCh("analytics", e.target.checked)}
                            />
                            {t("AnalyticsCookies")}
                        </label>
                    </div>
                    <button onClick={savePreferences}>{t("SavePreferences")}</button>
                </div>
            )}

            <h3>{t("CookieDocumentation")}</h3>
            <div className={css.wrapper}>
                {cookieDoc.map((header, index) => (
                    <div key={index} className={css.cookie}>
                        <h2 className={css.header}>{header.title}</h2>
                        <p className={css.text}>{header.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CookieManager;
