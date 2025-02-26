import ReactGA from "react-ga4";
import {fetchEnvVars} from "../../ultis/fetchEnvVars";


let trackingId = null;
let deleteCookie = null;


fetchEnvVars().then(envVars => {
    trackingId = envVars.trackingId;
    deleteCookie= envVars.deleteCookie;
});


export const initializeAnalytics = () => {
    ReactGA.initialize(trackingId);
    ReactGA.send("pageview");
};


export const deleteGaCookie = () => {
    const cookiesToDelete = ['_ga', '_gid', '_gat',
        '_ga_' +  deleteCookie];
    cookiesToDelete.forEach(cookie => {
        document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ga_reset" });
    window.location.reload();
};

export const DeclinedGaCookie = () => {
    const cookiesToDelete = ['_ga', '_gid', '_gat',
        '_ga_' +  deleteCookie];
    cookiesToDelete.forEach(cookie => {
        document.cookie = `${cookie}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ga_reset" });
};
