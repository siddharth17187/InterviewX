import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
}

const messages = [
  "📄 Uploading Resume...",
  "📑 Extracting Resume Text...",
  "🧠 Gemini AI is analyzing your resume...",
  "🔍 Comparing with Job Description...",
  "📊 Calculating ATS Score...",
  "✅ Almost Done..."
];

export default function AnalyzingModal({ open }: Props) {

  const [message, setMessage] = useState(messages[0]);

  const [progress, setProgress] = useState(5);

  useEffect(() => {

    if (!open) return;

    let i = 0;

    const timer = setInterval(() => {

      i++;

      if (i < messages.length) {

        setMessage(messages[i]);

      }

      setProgress((p) => Math.min(p + 15, 95));

    }, 2500);

    return () => clearInterval(timer);

  }, [open]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-[500px]">

        <div className="flex justify-center">

          <ClipLoader

            color="#2563eb"

            size={70}

          />

        </div>

        <h2 className="text-3xl font-bold text-center mt-8">

          AI Resume Analysis

        </h2>

        <p className="text-center mt-6 text-lg">

          {message}

        </p>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-10">

          <div

            className="bg-blue-600 h-3 rounded-full transition-all duration-700"

            style={{ width: `${progress}%` }}

          />

        </div>

        <p className="text-center mt-4 text-gray-500">

          {progress}% Completed

        </p>

      </div>

    </div>

  );

}