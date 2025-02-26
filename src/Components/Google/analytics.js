import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
    ReactGA.initialize(import.meta.env.VITE_APP_GA_TRACKING_ID);
    ReactGA.send("pageview");
};


export const deleteGaCookie = () => {
    const cookiesToDelete = ['_ga', '_gid', '_gat',
        '_ga_' +  import.meta.env.VITE_APP_GA_DELETE_COOKIE];
    cookiesToDelete.forEach(cookie => {
        document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ga_reset" });
    window.location.reload();
};

export const DeclinedGaCookie = () => {
    const cookiesToDelete = ['_ga', '_gid', '_gat',
        '_ga_' +  import.meta.env.VITE_APP_GA_DELETE_COOKIE];
    cookiesToDelete.forEach(cookie => {
        document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ga_reset" });
};

// import ReactGA from "react-ga4";
//
// // Hole ENV-Variablen mit process.env für Netlify & Node.js Support
// const GA_TRACKING_ID = process.env.VITE_APP_GA_TRACKING_ID || "";
// const GA_DELETE_COOKIE = process.env.VITE_APP_GA_DELETE_COOKIE || "";
//
// export const initializeAnalytics = () => {
//     if (!GA_TRACKING_ID) {
//         console.warn("⚠️ GA_TRACKING_ID ist nicht gesetzt!");
//         return;
//     }
//     ReactGA.initialize(GA_TRACKING_ID);
//     ReactGA.send("pageview");
// };
//
// export const deleteGaCookie = () => {
//     if (!GA_DELETE_COOKIE) {
//         console.warn("⚠️ GA_DELETE_COOKIE ist nicht gesetzt!");
//         return;
//     }
//     const cookiesToDelete = ['_ga', '_gid', '_gat', `_ga_${GA_DELETE_COOKIE}`];
//     cookiesToDelete.forEach(cookie => {
//         document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
//     });
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({ event: "ga_reset" });
//     window.location.reload();
// };
//
// export const DeclinedGaCookie = () => {
//     if (!GA_DELETE_COOKIE) {
//         console.warn("⚠️ GA_DELETE_COOKIE ist nicht gesetzt!");
//         return;
//     }
//     const cookiesToDelete = ['_ga', '_gid', '_gat', `_ga_${GA_DELETE_COOKIE}`];
//     cookiesToDelete.forEach(cookie => {
//         document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
//     });
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({ event: "ga_reset" });
// };
