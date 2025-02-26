exports.handler = async () => {
    try {

        const envVars = {
            trackingId: process.env.VITE_APP_GA_TRACKING_ID || null,
            deleteCookie: process.env.VITE_APP_GA_DELETE_COOKIE || null,
            ServiceId: process.env.VITE_APP_SERVICE_ID || null,
            TemplateId: process.env.VITE_APP_TEMPLATE_ID || null,
            PublicKey: process.env.VITE_APP_PUPLICKEY || null,
        };

        if (!envVars.trackingId) {
            console.warn("⚠️ VITE_APP_GA_TRACKING_ID ist nicht gesetzt!");
        }

        return {
            statusCode: 200,
            body: JSON.stringify(envVars)
        };

    } catch (error) {
        console.error("❌ Fehler beim Abrufen der ENV-Variablen:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Interner Serverfehler" })
        };
    }
};
