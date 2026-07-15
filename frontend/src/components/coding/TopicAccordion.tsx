import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import type { CodingQuestion } from "../../context/CodingContext";

import QuestionCard from "./QuestionCard";
import CodingSkeleton from "./CodingSkeleton";

interface Props {
  questions: CodingQuestion[];
  loading: boolean;
  refreshProgress: () => void;
}

export default function TopicAccordion({
  questions,
  loading,
  refreshProgress,
}: Props) {

  const [openTopic, setOpenTopic] = useState("");

  if (loading) {
    return <CodingSkeleton />;
  }

  const groupedQuestions = questions.reduce((acc, question) => {

    if (!acc[question.topic]) {
      acc[question.topic] = [];
    }

    acc[question.topic].push(question);

    return acc;

  }, {} as Record<string, CodingQuestion[]>);

  return (

    <div className="space-y-3">

      {Object.keys(groupedQuestions).map((topic) => (

        <div
          key={topic}
          className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
        >

          <button
            onClick={() =>
              setOpenTopic(openTopic === topic ? "" : topic)
            }
            className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition"
          >

            <div className="text-left">

              <h2 className="text-lg font-semibold text-gray-800">
                {topic}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {groupedQuestions[topic].length} Questions
              </p>

            </div>

            <div className="text-gray-500 text-lg">

              {openTopic === topic ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}

            </div>

          </button>

          {openTopic === topic && (

            <div className="border-t bg-gray-50 px-4 py-4 space-y-3">

              {groupedQuestions[topic].map((question) => (

                <QuestionCard
                  key={question.id}
                  id={question.id}
                  title={question.title}
                  difficulty={question.difficulty}
                  companies={question.companies.split(",")}
                  solved={question.solved}
                  bookmarked={question.bookmarked}
                  leetcodeUrl={question.leetcodeUrl}
                  hackerRankUrl={question.hackerRankUrl}
                  refreshProgress={refreshProgress}
                />

              ))}

            </div>

          )}

        </div>

      ))}

    </div>

  );

}