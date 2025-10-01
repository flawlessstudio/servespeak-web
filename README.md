# ServeSpeak-Web

**ServeSpeak-Web** is a Progressive Web Application (PWA) designed to facilitate real-time, bi-directional speech translation, primarily aimed at service and hospitality staff communicating with international guests.

It leverages client-side **WebAssembly (Whisper)** for low-latency speech-to-text when possible, a lightweight backend for advanced translation models, and a modern React frontend.

## 🚀 Features

* **Real-time Speech Recognition & Translation:** Instantaneous results using a dedicated "Voice Button."
* **Offline Support:** PWA architecture for core functionality and caching.
* **Bilingual Interface:** Simple language selection for source and target languages.
* **Service-Specific Lessons:** Contextual phrases and common interactions for training.

## 🛠️ Tech Stack

* **Frontend:** React, Vite, JavaScript (ESM)
* **Speech Recognition:** Whisper via WebAssembly (`whisper-wasm.js`)
* **Backend:** Node.js/Express (for translation API proxy/advanced models)
* **Deployment:** Netlify

## 📂 Project Structure

The project is structured into three main parts: the React client (`src/`), the PWA configuration (`pwa/`), and a simple API server (`backend/`).

## ⚙️ Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/servespeak-web.git](https://github.com/your-username/servespeak-web.git)
    cd servespeak-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    (cd backend && npm install)
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # The backend is typically started separately:
    # cd backend && node server.js
    ```

