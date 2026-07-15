import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  startInterview,
} from "../../services/InterviewService";

import { useInterview } from "../../context/InterviewContext";

export default function InterviewSetupPage() {

  const navigate = useNavigate();

  const {

    setSessionId,

    setMessages,

    setCurrentQuestion,

    setTotalQuestions,

  } = useInterview();

  const [topic, setTopic] =
    useState("Java");

  const [difficulty, setDifficulty] =
    useState("Medium");

  const [questions, setQuestions] =
    useState(1);

  const [loading, setLoading] =
    useState(false);

  const start = async () => {

    try {

      setLoading(true);

      const response =
        await startInterview({

          topic,

          difficulty,

          totalQuestions: questions,

        });

      setSessionId(
        response.sessionId
      );

      setCurrentQuestion(
        response.questionNumber
      );

      setTotalQuestions(
        questions
      );

      setMessages([
        {
          id: 1,
          sender: "AI",
          message: response.question,
        },
      ]);

      navigate("/interview/session");

    } catch (error) {

      console.error(error);

      alert("Unable to start interview.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl">

        <h1 className="text-4xl font-bold">

          AI Mock Interview

        </h1>

        <p className="text-gray-500 mt-3">

          Configure your interview and let InterviewX conduct a realistic AI interview.

        </p>

        <div className="mt-8">

          <label className="font-semibold">

            Interview Topic

          </label>

          <select

            value={topic}

            onChange={(e) =>
              setTopic(e.target.value)
            }

            className="w-full border rounded-xl p-3 mt-2"

          >

            <option>Java</option>

            <option>Spring Boot</option>

            <option>React</option>

            <option>SQL</option>

            <option>DSA</option>

            <option>HR</option>

          </select>

        </div>

        <div className="mt-6">

          <label className="font-semibold">

            Difficulty

          </label>

          <select

            value={difficulty}

            onChange={(e) =>
              setDifficulty(e.target.value)
            }

            className="w-full border rounded-xl p-3 mt-2"

          >

            <option>Easy</option>

            <option>Medium</option>

            <option>Hard</option>

          </select>

        </div>

        <div className="mt-6">

          <label className="font-semibold">

            Number of Questions

          </label>

          <select

            value={questions}

            onChange={(e) =>
              setQuestions(
                Number(e.target.value)
              )
            }

            className="w-full border rounded-xl p-3 mt-2"

          >

            <option value={1}>1 Questions</option>

            <option value={10}>10 Questions</option>

            <option value={15}>15 Questions</option>

          </select>

        </div>

        <button

          onClick={start}

          disabled={loading}

          className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"

        >

          {loading

            ? "Starting Interview..."

            : "Start AI Interview"}

        </button>

      </div>

    </div>

  );

}