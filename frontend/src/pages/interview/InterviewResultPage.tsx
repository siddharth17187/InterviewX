import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getInterviewResult } from "../../services/InterviewService";
import type { InterviewResultResponse } from "../../services/InterviewService";

export default function InterviewResultPage() {

  const { sessionId } = useParams();

  const navigate = useNavigate();

  const [result, setResult] =
    useState<InterviewResultResponse>();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadResult();

  }, []);

  const loadResult = async () => {

    try {

      const data =
        await getInterviewResult(
          Number(sessionId)
        );

      setResult(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center p-4">

        <h2 className="text-xl sm:text-2xl font-bold text-center animate-pulse">

          Generating AI Report...

        </h2>

      </div>

    );

  }

  if (!result) return null;

  return (

    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8 lg:py-12">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 lg:p-10">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-tight">

          🎉 Interview Completed

        </h1>

        <p className="text-center text-gray-500 text-sm sm:text-base mt-2 sm:mt-3">

          Here is your AI Interview Report

        </p>

        {/* Responsive Scores Grid (2 cols on small screens, 4 cols on tablet and up) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">

          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">

            <h3 className="font-semibold text-xs sm:text-sm text-gray-700 uppercase tracking-wider">

              Overall

            </h3>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-blue-600">

              {result.overallScore}

            </p>

          </div>

          <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">

            <h3 className="font-semibold text-xs sm:text-sm text-gray-700 uppercase tracking-wider">

              Technical

            </h3>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-green-600">

              {result.technicalScore}

            </p>

          </div>

          <div className="bg-yellow-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">

            <h3 className="font-semibold text-xs sm:text-sm text-gray-700 uppercase tracking-wider">

              Communication

            </h3>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-yellow-600">

              {result.communicationScore}

            </p>

          </div>

          <div className="bg-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">

            <h3 className="font-semibold text-xs sm:text-sm text-gray-700 uppercase tracking-wider">

              Confidence

            </h3>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-purple-600">

              {result.confidenceScore}

            </p>

          </div>

        </div>

        {/* Strengths and Improvements section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 sm:mt-10">

          <div>

            <h2 className="text-xl sm:text-2xl font-bold text-green-600 flex items-center gap-2">

              <span>✅</span> Strengths

            </h2>

            <ul className="mt-4 sm:mt-5 space-y-3">

              {result.strengths.map((item) => (

                <li key={item} className="text-sm sm:text-base text-gray-700 flex items-start gap-2">

                  <span className="text-green-600 shrink-0">•</span> 
                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>

          <div>

            <h2 className="text-xl sm:text-2xl font-bold text-red-600 flex items-center gap-2">

              <span>📈</span> Improvements

            </h2>

            <ul className="mt-4 sm:mt-5 space-y-3">

              {result.improvements.map((item) => (

                <li key={item} className="text-sm sm:text-base text-gray-700 flex items-start gap-2">

                  <span className="text-red-600 shrink-0">•</span> 
                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* AI Feedback Section */}
        <div className="bg-slate-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 mt-8 sm:mt-10">

          <h2 className="text-xl sm:text-2xl font-bold">

            AI Feedback

          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed sm:leading-8 text-gray-700">

            {result.overallFeedback}

          </p>

        </div>

        {/* Button Container */}
        <div className="flex justify-center mt-8 sm:mt-10 w-full">

          <button

            onClick={() => navigate("/dashboard")}

            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-8 py-3.5 sm:py-4 rounded-xl transition duration-150 text-center"

          >

            Back to Dashboard

          </button>

        </div>

      </div>

    </div>

  );

}