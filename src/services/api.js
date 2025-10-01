// Service for calling the backend API
const API_BASE_URL = 'http://localhost:3001/api'; // Adjust for production

/**
 * Performs translation using the server-side advanced model.
 * @param {string} text - The text to translate.
 * @param {string} sourceLang - The source language code.
 * @param {string} targetLang - The target language code.
 * @returns {Promise<string>} The translated text.
 */
export const serverTranslate = async (text, sourceLang, targetLang) => {
    try {
        const response = await fetch(`${API_BASE_URL}/translate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, sourceLang, targetLang }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.translation;
    } catch (error) {
        console.error('API Server translation failed:', error);
        throw new Error('Could not reach translation server.');
    }
};
