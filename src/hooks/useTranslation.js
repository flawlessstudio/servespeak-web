import { useState, useEffect, useCallback } from 'react';
import { loadWasmModel, transcribeAudioWasm } from '../services/whisper-wasm';
import { serverTranslate } from '../services/api';

/**
 * Handles the full speech recognition and translation workflow.
 * @param {string} sourceLang - The source language code.
 * @param {string} targetLang - The target language code.
 */
const useTranslation = (sourceLang, targetLang) => {
  const [translation, setTranslation] = useState('Press the button to start speaking...');
  const [isListening, setIsListening] = useState(false);
  const [isLoadingWasm, setIsLoadingWasm] = useState(true);

  // 1. Load the WASM model on component mount
  useEffect(() => {
    loadWasmModel().then(() => {
      setIsLoadingWasm(false);
    }).catch(err => {
      console.error("Failed to load WASM model:", err);
      // Fallback: If WASM fails, the app might rely solely on the server API
      setIsLoadingWasm(false); 
      setTranslation('Error loading local speech model. Using server fallback.');
    });
  }, []);

  // 2. Start Listening (Speech Recognition API would be initiated here)
  const startListening = useCallback(() => {
    if (isLoadingWasm) return;
    setIsListening(true);
    setTranslation('Listening...');
    console.log('Starting audio recording...');
    // --- Actual start of MediaRecorder or Web Speech API goes here ---
  }, [isLoadingWasm]);

  // 3. Stop Listening and Process
  const stopListening = useCallback(async () => {
    setIsListening(false);
    setTranslation('Processing...');
    
    // --- Actual stopping of MediaRecorder and getting the audioBlob ---
    const mockAudioBlob = new Blob(['mock audio data'], { type: 'audio/wav' });

    try {
      // Step A: Speech-to-Text (WASM)
      const transcribedText = await transcribeAudioWasm(mockAudioBlob, sourceLang);
      setTranslation(`Recognized (${sourceLang}): ${transcribedText}`);
      
      // Step B: Text-to-Text Translation (Server API)
      const translatedText = await serverTranslate(transcribedText, sourceLang, targetLang);
      setTranslation(translatedText); // Final result
      
    } catch (error) {
      console.error("Translation/Transcription failed:", error);
      setTranslation('Error: Could not process request. Try again.');
    }
  }, [sourceLang, targetLang]);

  return { 
    translation, 
    isListening, 
    startListening, 
    stopListening, 
    isLoadingWasm 
  };
};

export default useTranslation;
