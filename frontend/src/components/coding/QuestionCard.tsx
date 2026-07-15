import { useState } from "react";
import {
  FaCheckCircle,
  FaRegCircle,
  FaBookmark,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  markSolved,
  bookmarkQuestion,
} from "../../services/CodingServices";

import CongratulationsModal from "./CongratulationsModal";

interface Props {
  id: number;
  title: string;
  difficulty: string;
  companies: string[];
  solved: boolean;
  bookmarked: boolean;
  leetcodeUrl: string;
  hackerRankUrl: string;
  refreshProgress: () => void;
}

export default function QuestionCard({
  id,
  title,
  difficulty,
  companies,
  solved,
  bookmarked,
  leetcodeUrl,
  hackerRankUrl,
  refreshProgress,
}: Props) {
  const [isSolved, setIsSolved] = useState(solved);

  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  const [showModal, setShowModal] = useState(false);

  const difficultyColor = () => {
    switch (difficulty) {
      case "EASY":
        return "bg-green-100 text-green-700";

      case "MEDIUM":
        return "bg-yellow-100 text-yellow-700";

      case "HARD":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleSolved = async () => {
    if (isSolved) return;

    try {
      await markSolved(id);

      setIsSolved(true);

      setShowModal(true);

      refreshProgress();
    } catch (error) {
      console.error(error);
      alert("Failed to mark question as solved.");
    }
  };

  const handleBookmark = async () => {
    try {
      await bookmarkQuestion(id);

      setIsBookmarked((prev) => !prev);

      refreshProgress();
    } catch (error) {
      console.error(error);
      alert("Failed to bookmark question.");
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <button onClick={handleSolved}>
              {isSolved ? (
                <FaCheckCircle className="text-2xl text-green-600" />
              ) : (
                <FaRegCircle className="text-2xl text-gray-400 hover:text-green-600" />
              )}
            </button>

            <div>
              <h3 className="text-xl font-semibold">{title}</h3>

              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor()}`}
                >
                  {difficulty}
                </span>

                {companies.map((company) => (
                  <span
                    key={company}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button onClick={handleBookmark}>
            <FaBookmark
              className={`text-2xl ${
                isBookmarked
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
            />
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={leetcodeUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl flex items-center gap-2"
          >
            LeetCode
            <FaExternalLinkAlt size={12} />
          </a>

          {hackerRankUrl && (
            <a
              href={hackerRankUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl flex items-center gap-2"
            >
              HackerRank
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>

      <CongratulationsModal
        open={showModal}
        title={title}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}