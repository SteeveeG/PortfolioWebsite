import React, { useState } from "react";
import { useCookies } from "react-cookie";
import css from "./cookieManager.module.css";
import { initializeAnalytics } from "../Google";


const CookieManager = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["ga-consent"]);
    const [settings, setSettings] = useState({
        analytics: cookies["ga-consent"] === false,
    });
    const [showManager, setShowManager] = useState(false);

    const handleConsentChange = (key, value) => {
        setSettings({ ...settings, [key]: value });
        if (value) {
            setCookie("ga-consent", true, { path: "/", maxAge: 31536000 });
         } else {
            removeCookie("ga-consent",{ path: "/"});
        }
    };

    const savePreferences = () => {
        setShowManager(false);
        alert("Your cookie preferences have been saved.");
    };

    const cookieDocumentation = [
        {
            name: "Analytics Cookies",
            description: "Used to analyze user behavior to improve the website.",
            duration: "14 months",
            receiver: "Google Analytics (USA)",
        },

    ];

    return (
        <div className={css.cookieManager}>
            <button onClick={() => setShowManager(true)}>Manage Cookies</button>
            {showManager && (
                <div className={css.popup}>
                    <h2>Cookie Preferences</h2>
                    <p>Adjust your preferences for cookies below:</p>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.analytics}
                                onChange={(e) => handleConsentChange("ga-consent", e.target.checked)}
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
