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
