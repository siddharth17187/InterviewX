import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AIAvatar from "../../components/interview/AIAvatar";

import useSpeechRecognition from "../../hooks/useSpeechRecognition";
import useSpeechSynthesis from "../../hooks/useSpeechSynthesis";

import { useInterview } from "../../context/InterviewContext";

import { submitAnswer } from "../../services/InterviewService";

export default function InterviewSessionPage() {

  const navigate = useNavigate();

  const {
    sessionId,
    messages,
    setMessages,
    currentQuestion,
    setCurrentQuestion,
    totalQuestions,
    thinking,
    setThinking,
  } = useInterview();

  const {
    transcript,
    listening,
    startListening,
    stopListening,
    setTranscript,
  } = useSpeechRecognition();

  const {
    speaking,
    speak,
  } = useSpeechSynthesis();

  useEffect(() => {

    if (messages.length === 0) return;

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.sender === "AI") {

      speak(lastMessage.message, () => {
        startListening();
      });

    }

  }, [messages]);

  return (

    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">

      <div className="mx-auto w-full max-w-5xl">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <h1 className="text-2xl font-bold text-center sm:text-left sm:text-4xl">

            🤖 AI Mock Interview

          </h1>

          <span className="self-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white sm:self-auto sm:text-base">

            Question {currentQuestion} / {totalQuestions}

          </span>

        </div>

        {/* AI Avatar */}

        <div className="mt-8 flex justify-center sm:mt-10">

          <div className="scale-75 sm:scale-90 lg:scale-100">

            <AIAvatar speaking={speaking} />

          </div>

        </div>
        
        {/* Interview Conversation */}

        <div className="mt-6 sm:mt-8 lg:mt-10 rounded-3xl bg-white p-5 shadow-lg sm:p-6 lg:p-8">

          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Interview Conversation
          </h2>

          <div className="space-y-4 h-[300px] overflow-y-auto pr-2 sm:h-[400px]">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`flex ${
                  message.sender === "AI"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 shadow-md sm:max-w-[80%] lg:max-w-[75%] sm:px-6 sm:py-4 ${
                    message.sender === "AI"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >

                  <p className="mb-2 text-sm font-semibold sm:text-base">

                    {message.sender === "AI"
                      ? "🤖 AI Interviewer"
                      : "👤 You"}

                  </p>

                  <p className="whitespace-pre-wrap text-sm leading-6 sm:text-base sm:leading-7">

                    {message.message}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
        
        {/* Your Response */}

        <div className="mt-6 rounded-3xl bg-white p-5 shadow-lg sm:mt-8 sm:p-6 lg:p-8">

          <h2 className="text-xl font-bold sm:text-2xl">
            Your Response
          </h2>

          <div className="mt-5">

            {listening ? (

              <div className="flex items-center gap-3">

                <div className="h-4 w-4 animate-ping rounded-full bg-red-500"></div>

                <span className="font-semibold text-red-600 text-sm sm:text-base">
                  Listening...
                </span>

              </div>

            ) : (

              <span className="text-sm text-gray-500 sm:text-base">
                Microphone is idle
              </span>

            )}

          </div>

          <div className="mt-6 min-h-[140px] rounded-2xl bg-slate-100 p-4 sm:p-6">

            <p className="whitespace-pre-wrap text-sm leading-7 text-gray-700 sm:text-base">

              {transcript ||
                "Start speaking... your response will appear here."}

            </p>

          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => {
                setTranscript("");
                startListening();
              }}
              className="w-full rounded-xl bg-gray-600 px-6 py-3 text-white hover:bg-gray-700 sm:w-auto"
            >
              Retry
            </button>

            <button
              onClick={() => {
                stopListening();
                navigate("/dashboard");
              }}
              className="w-full rounded-xl bg-red-500 px-6 py-3 text-white hover:bg-red-600 sm:w-auto"
            >
              Stop Interview
            </button>

            <button
              onClick={async () => {

                stopListening();

                if (!transcript.trim()) {
                  alert("Please answer the question.");
                  return;
                }

                try {

                  setThinking(true);

                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now(),
                      sender: "USER",
                      message: transcript,
                    },
                  ]);

                  const response = await submitAnswer({
                    sessionId: sessionId!,
                    answer: transcript,
                  });

                  if (response.interviewCompleted) {

                    setTranscript("");

                    navigate(`/interview/result/${sessionId}`);

                    return;

                  }

                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now() + 1,
                      sender: "AI",
                      message: response.question,
                    },
                  ]);

                  setCurrentQuestion(response.questionNumber);

                  setTranscript("");

                } catch (error) {

                  console.error(error);

                  alert("Unable to submit answer.");

                } finally {

                  setThinking(false);

                }

              }}
              disabled={thinking}
              className="w-full rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 disabled:bg-blue-300 sm:ml-auto sm:w-auto"
            >
              {thinking ? "AI Thinking..." : "Next Question"}
            </button>

          </div>

          {thinking && (

            <div className="mt-8 flex justify-center">

              <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

            </div>

          )}

        </div>

      </div>
      
    </div>
  );
}