import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Props {
  analysis: any;
}

export default function SkillsCard({ analysis }: Props) {
  if (!analysis) return null;

  return (
    <div className="rounded-3xl bg-white p-4 shadow-md sm:p-6 lg:p-8">

      <h2 className="mb-6 text-xl font-bold sm:text-2xl">
        Skills Analysis
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Matching Skills */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-green-600">
            ✅ Matching Skills
          </h3>

          {analysis.matchingSkills?.length ? (

            <div className="space-y-3">

              {analysis.matchingSkills.map((skill: string) => (

                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-xl bg-green-50 p-3 break-words"
                >
                  <FaCheckCircle className="shrink-0 text-green-500" />

                  <span className="break-words">
                    {skill}
                  </span>

                </div>

              ))}

            </div>

          ) : (

            <p className="text-gray-500">
              No matching skills found.
            </p>

          )}

        </div>

        {/* Missing Skills */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-red-600">
            ❌ Missing Skills
          </h3>

          {analysis.missingSkills?.length ? (

            <div className="space-y-3">

              {analysis.missingSkills.map((skill: string) => (

                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-xl bg-red-50 p-3 break-words"
                >
                  <FaTimesCircle className="shrink-0 text-red-500" />

                  <span className="break-words">
                    {skill}
                  </span>

                </div>

              ))}

            </div>

          ) : (

            <p className="text-gray-500">
              No missing skills.
            </p>

          )}

        </div>

      </div>

    </div>
  );
}