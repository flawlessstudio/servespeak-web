import { useState, useCallback } from 'react';
import VoiceButton from './components/VoiceButton.jsx';
import TranslationDisplay from './components/TranslationDisplay.jsx';
import LanguageSelector from './components/LanguageSelector.jsx';
import useTranslation from './hooks/useTranslation.js';
import LessonCard from './components/LessonCard.jsx';

const App = () => {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  // Custom hook for handling all translation logic
  const {
    translation,
    isListening,
    startListening,
    stopListening,
    isLoadingWasm,
  } = useTranslation(sourceLang, targetLang);

  const handleSwapLangs = useCallback(() => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  }, [sourceLang, targetLang]);

  return (
    <div style={styles.container}>
      <h1>ServeSpeak 🗣️</h1>

      <LanguageSelector 
        sourceLang={sourceLang}
        targetLang={targetLang}
        onSourceChange={setSourceLang}
        onTargetChange={setTargetLang}
        onSwap={handleSwapLangs}
      />

      <TranslationDisplay 
        text={translation} 
        isListening={isListening} 
        isLoadingWasm={isLoadingWasm}
      />

      <VoiceButton 
        isListening={isListening} 
        onClick={isListening ? stopListening : startListening}
        disabled={isLoadingWasm}
      />

      <LessonCard title="Common Server Phrases" content="Hello, how can I help you? | May I take your order?" />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
};

export default App;
