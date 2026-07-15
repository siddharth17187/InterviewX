import { useEffect, useState } from "react";

export default function useSpeechSynthesis() {

    const [speaking, setSpeaking] =
        useState(false);

    useEffect(() => {

        return () => {

            window.speechSynthesis.cancel();

        };

    }, []);

    const speak = (

        text: string,

        onEnd?: () => void

    ) => {

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(text);

        utterance.lang = "en-US";

        utterance.rate = 1;

        utterance.pitch = 1;

        utterance.volume = 1;

        utterance.onstart = () => {

            setSpeaking(true);

        };

        utterance.onend = () => {

            setSpeaking(false);

            if (onEnd) {

                onEnd();

            }

        };

        window.speechSynthesis.speak(
            utterance
        );

    };

    const stopSpeaking = () => {

        window.speechSynthesis.cancel();

        setSpeaking(false);

    };

    return {

        speaking,

        speak,

        stopSpeaking,

    };

}