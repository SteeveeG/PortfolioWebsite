import React, { useState } from "react";
import { useCookies } from "react-cookie";
import css from "./cookieManager.module.css";

const CookieManager = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["functional", "analytics", "marketing"]);
    const [settings, setSettings] = useState({
        functional: cookies.functional || false,
        analytics: cookies.analytics || false,
        marketing: cookies.marketing || false,
    });
    const [showManager, setShowManager] = useState(false);

    const handleConsentChange = (key, value) => {
        setSettings({ ...settings, [key]: value });
        if (value) {
            setCookie(key, true, { path: "/", maxAge: 30 * 24 * 60 * 60 }); // 30 Tage Speicherdauer
        } else {
            removeCookie(key, { path: "/" });
        }
    };

    const savePreferences = () => {
        setShowManager(false);
        alert("Your cookie preferences have been saved.");
    };

    const cookieDocumentation = [
        {
            name: "Functional Cookies",
            description: "Essential for the website to function correctly.",
            duration: "Session or 30 days",
            receiver: "No external services",
        },
        {
            name: "Analytics Cookies",
            description: "Used to analyze user behavior to improve the website.",
            duration: "14 months",
            receiver: "Google Analytics (USA)",
        },
        {
            name: "Marketing Cookies",
            description: "Track user behavior for personalized advertising.",
            duration: "30 days",
            receiver: "Facebook, Google Ads (USA)",
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
                                checked={settings.functional}
                                onChange={(e) => handleConsentChange("functional", e.target.checked)}
                                disabled
                            />
                            Functional Cookies (required)
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.analytics}
                                onChange={(e) => handleConsentChange("analytics", e.target.checked)}
                            />
                            Analytics Cookies
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.marketing}
                                onChange={(e) => handleConsentChange("marketing", e.target.checked)}
                            />
                            Marketing Cookies
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
