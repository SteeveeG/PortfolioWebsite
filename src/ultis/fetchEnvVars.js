export const fetchEnvVars = async () => {
    try {
        const response = await fetch("/.netlify/functions/getEnvVars");
        return await response.json();
    } catch (error) {
        console.error("Fehler beim Laden der ENV-Variablen:", error);
        return {};
    }
};
