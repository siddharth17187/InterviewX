import {
  FaBullseye,
  FaBriefcase,
  FaFileAlt,
  FaKey,
} from "react-icons/fa";

interface Props {
  analysis: any;
}

export default function ScoreCards({ analysis }: Props) {
  if (!analysis) {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-md sm:p-8">
        <p className="text-center text-gray-500">
          No analysis yet
        </p>
      </div>
    );
  }

  const scores = [
    {
      title: "ATS Score",
      score: `${analysis.atsScore}%`,
      color: "text-blue-600",
      icon: <FaBullseye />,
    },
    {
      title: "Job Match",
      score: `${analysis.jobMatchScore}%`,
      color: "text-green-600",
      icon: <FaBriefcase />,
    },
    {
      title: "Resume Score",
      score: `${analysis.resumeScore}%`,
      color: "text-purple-600",
      icon: <FaFileAlt />,
    },
    {
      title: "Keyword Match",
      score: `${analysis.keywordScore}%`,
      color: "text-orange-500",
      icon: <FaKey />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {scores.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl bg-white p-6 shadow-md transition hover:shadow-lg"
        >
          <div className={`text-3xl ${card.color}`}>
            {card.icon}
          </div>

          <h3 className="mt-4 text-sm font-semibold text-gray-600 sm:text-base">
            {card.title}
          </h3>

          <h1 className={`mt-3 text-3xl font-bold sm:text-4xl ${card.color}`}>
            {card.score}
          </h1>
        </div>
      ))}
    </div>
  );
}