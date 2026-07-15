import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function useSpeechRecognition() {

  const [transcript, setTranscript] = useState("");

  const [listening, setListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      console.error("Speech Recognition is not supported.");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-US";

    recognition.onstart = () => {

      setListening(true);

    };

    recognition.onend = () => {

      setListening(false);

    };

    recognition.onerror = (event: any) => {

      console.error("Speech Recognition Error:", event.error);

      setListening(false);

    };

    recognition.onresult = (event: any) => {

      let text = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {

        text += event.results[i][0].transcript + " ";

      }

      setTranscript(text.trim());

    };

    recognitionRef.current = recognition;

  }, []);

  const startListening = () => {

    recognitionRef.current?.start();

  };

  const stopListening = () => {

    recognitionRef.current?.stop();

  };

  const resetTranscript = () => {

    setTranscript("");

  };

  return {

    transcript,

    listening,

    startListening,

    stopListening,

    resetTranscript,

    setTranscript,

  };

}