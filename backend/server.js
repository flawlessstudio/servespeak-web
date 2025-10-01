// Lightweight Node.js Express server
import express from 'express';
import cors from '// Lightweight Node.js Express server
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'ServeSpeak Backend' });
});

/**
 * Endpoint for advanced, cloud-based translation.
 * Used when WASM-based translation is insufficient or for less common languages.
 */
app.post('/api/translate', async (req, res) => {
    const { text, sourceLang, targetLang } = req.body;

    if (!text || !sourceLang || !targetLang) {
        return res.status(400).json({ error: 'Missing required parameters.' });
    }

    try {
        // --- Placeholder for actual translation logic (e.g., calling Google Translate API, etc.) ---
        const translatedText = `(Server-Translated ${targetLang}): ${text.toUpperCase()}`;

        res.json({ translation: translatedText });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Failed to perform server-side translation.' });
    }
});

app.listen(PORT, () => {
    console.log(`ServeSpeak Backend listening at http://localhost:${PORT}`);
});


const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'ServeSpeak Backend' });
});

/**
 * Endpoint for advanced, cloud-based translation.
 * Used when WASM-based translation is insufficient or for less common languages.
 */
app.post('/api/translate', async (req, res) => {
    const { text, sourceLang, targetLang } = req.body;

    if (!text || !sourceLang || !targetLang) {
        return res.status(400).json({ error: 'Missing required parameters.' });
    }

    try {
        // --- Placeholder for actual translation logic (e.g., calling Google Translate API, etc.) ---
        const translatedText = `(Server-Translated ${targetLang}): ${text.toUpperCase()}`;

        res.json({ translation: translatedText });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Failed to perform server-side translation.' });
    }
});

app.listen(PORT, () => {
    console.log(`ServeSpeak Backend listening at http://localhost:${PORT}`);
});
