import React, { useState } from "react";
import { useCookies } from "react-cookie";
import css from "./cookieManager.module.css";
import { initializeAnalytics, deleteGaCookie } from "../Google/analytics.js";
import ReactGA from "react-ga4";


const CookieManager = () => {
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            return match[2].valueOf();
        }
        return null;
    }

    const [cookies, setCookie, removeCookie] = useCookies(["ga-consent"]);
    const [settings, setSettings] = useState({
        analytics: getCookie('ga-consent'),
    });
    const [showManager, setShowManager] = useState(false);

    const handleConsentChange = (key, value) => {
        setSettings({ ...settings, [key]: value });
        if (value) {
            initializeAnalytics();
            setCookie("ga-consent", true, { path: "/", maxAge: 31536000 });
         } else {
            deleteGaCookie();
            setCookie("ga-consent", false, { path: "/", maxAge: 0 });
            window[`ga-disable-${import.meta.env.VITE_APP_GA_TRACKING_ID}`] = true;
        }
    };

    const savePreferences = () => {
        setShowManager(false);
    };

    const cookieDocumentation = [
        {
            name: "Analytics Cookies",
            description: "Used to analyze user behavior to improve the website.",
            duration: "14 months",
            receiver: "Google Analytics (USA)",
        },

    ];
    function GetCookiesShowManager(){
        settings.analytics = getCookie('ga-consent')
        setShowManager(true)
    }

    return (
        <div className={css.cookieManager}>
            <button onClick={GetCookiesShowManager}>Manage Cookies</button>
            {showManager && (
                <div className={css.popup}>
                    <h2>Cookie Preferences</h2>
                    <p>Adjust your preferences for cookies below:</p>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.analytics  === "true"}
                                onChange={(e) => handleConsentChange("analytics", e.target.checked)}
                            />
                            Analytics Cookies
                        </label>
                    </div>
                    <button onClick={savePreferences}>Save Preferences</button>
                </div>
            )}


            <h3>Cookie Documentation</h3>
            <table>
                <thead>
                <tr>
                    <th>Cookie Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Receiver</th>
                </tr>
                </thead>
                <tbody>
                {cookieDocumentation.map((cookie, index) => (
                    <tr key={index}>
                        <td>{cookie.name}</td>
                        <td>{cookie.description}</td>
                        <td>{cookie.duration}</td>
                        <td>{cookie.receiver}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CookieManager;
