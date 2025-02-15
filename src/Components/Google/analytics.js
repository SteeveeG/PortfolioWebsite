import ReactGA from "react-ga4";

const GA_TRACKING_ID = ""; // Ersetze mit deiner ID

export const initializeAnalytics = () => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.send("pageview");
};
