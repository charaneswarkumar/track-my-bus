
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Volume1, VolumeX } from 'lucide-react';
import { filterBuses } from '../utils/mockData';
import { processVoiceCommand } from '../utils/voiceUtils';
import { Bus } from '../utils/types';

// Import SpeechRecognition type from the declarations file
// This ensures TypeScript can find the type
type SpeechRecognition = import('../types/speechRecognition').SpeechRecognition;

interface VoiceAssistantProps {
  buses: Bus[];
  onBusSelect?: (bus: Bus) => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ buses, onBusSelect }) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  // Now TypeScript should recognize the SpeechRecognition type
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        handleCommand(transcript);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
    } else {
      console.error('Speech recognition not supported in this browser');
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  // Function to toggle listening state
  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  // Start listening for voice commands
  const startListening = () => {
    setTranscript('');
    setResponse('');
    
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  };

  // Stop listening for voice commands
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Toggle mute state for text-to-speech response
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (speechSynthesis && speechSynthesisRef.current) {
      if (!isMuted) {
        speechSynthesis.cancel();
      }
    }
  };

  // Process voice command
  const handleCommand = async (command: string) => {
    setIsProcessing(true);
    try {
      const result = processVoiceCommand(command, buses);
      setResponse(result.response);
      
      // Highlight the relevant bus if found
      if (result.bus && onBusSelect) {
        onBusSelect(result.bus);
      }
      
      // Speak the response if not muted
      if (!isMuted) {
        speak(result.response);
      }
    } catch (error) {
      console.error('Error processing command:', error);
      const errorMessage = 'Sorry, I couldn\'t process your request. Please try again.';
      setResponse(errorMessage);
      if (!isMuted) {
        speak(errorMessage);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Text-to-speech function
  const speak = (text: string) => {
    if (speechSynthesis) {
      speechSynthesis.cancel(); // Cancel any ongoing speech
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Get voice options
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Google'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      speechSynthesisRef.current = utterance;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="neo-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium flex items-center">
          <Volume2 className="h-4 w-4 mr-2 text-blue-500" />
          Voice Assistant
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={toggleMute}
            className="h-8 w-8 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-neutral-500" /> : <Volume1 className="h-4 w-4 text-blue-500" />}
          </button>
          <button
            onClick={toggleListening}
            className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              isListening 
                ? 'bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800/30' 
                : 'bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30'
            }`}
            disabled={isProcessing}
            title={isListening ? "Stop listening" : "Start listening"}
          >
            {isListening ? (
              <MicOff className="h-4 w-4 text-red-500" />
            ) : (
              <Mic className="h-4 w-4 text-blue-500" />
            )}
          </button>
        </div>
      </div>
      
      {isListening && (
        <div className="mb-3 flex items-center justify-center">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-blue-500 h-4 w-4 rounded-full"></div>
          </div>
        </div>
      )}
      
      {transcript && (
        <div className="mb-3">
          <div className="text-xs text-neutral-500 mb-1">You asked:</div>
          <div className="neo-card p-2 text-sm italic">{transcript}</div>
        </div>
      )}
      
      {response && (
        <div>
          <div className="text-xs text-neutral-500 mb-1">Response:</div>
          <div className="neo-card bg-blue-50 dark:bg-blue-900/10 p-3 text-sm">
            {response}
          </div>
        </div>
      )}
      
      {!isListening && !transcript && (
        <div className="text-center py-2 text-sm text-neutral-500 dark:text-neutral-400">
          <p>Ask about bus locations or arrival times</p>
          <p className="text-xs mt-1 opacity-75">Examples: "Where is bus 10?" or "When will my bus arrive?"</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
