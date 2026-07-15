import { useCoding } from "../../context/CodingContext";

export default function ProgressCard() {

  const { progress } = useCoding();

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            Solved Questions
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {progress.solvedQuestions}
            <span className="text-gray-400 text-xl">
              {" "}
              / {progress.totalQuestions}
            </span>
          </h2>

        </div>

        <div className="text-right">

          <p className="text-gray-500">
            XP
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            {progress.xp}
          </h2>

        </div>

        <div className="text-right">

          <p className="text-gray-500">
            Streak
          </p>

          <h2 className="text-3xl font-bold text-orange-500">
            🔥 {progress.streak}
          </h2>

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="font-medium">
            Progress
          </span>

          <span>
            {progress.completionPercentage.toFixed(1)}%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">

          <div

            className="bg-blue-600 h-4 rounded-full transition-all duration-500"

            style={{

              width: `${progress.completionPercentage}%`

            }}

          />

        </div>

      </div>

    </div>

  );

}