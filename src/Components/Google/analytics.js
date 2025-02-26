import ReactGA from "react-ga4";



const GA_TRACKING_ID = process.env.VITE_APP_GA_TRACKING_ID;
const GA_DELETE_COOKIE = process.env.VITE_APP_GA_DELETE_COOKIE;


export const initializeAnalytics = () => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.send("pageview");
};


export const deleteGaCookie = () => {
    const cookiesToDelete = ['_ga', '_gid', '_gat',
        '_ga_' +  GA_DELETE_COOKIE];
    cookiesToDelete.forEach(cookie => {
        document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ga_reset" });
    window.location.reload();
};

export const DeclinedGaCookie = () => {
    const cookiesToDelete = ['_ga', '_gid', '_gat',
        '_ga_' +  GA_DELETE_COOKIE];
    cookiesToDelete.forEach(cookie => {
        document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ga_reset" });
};
