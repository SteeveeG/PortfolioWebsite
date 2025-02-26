export const fetchEnvVars = async () => {
    try {
        const response = await fetch("/.netlify/functions/getEnvVars");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fehler beim Laden der ENV-Variablen:", error);
        return {};
    }
};
