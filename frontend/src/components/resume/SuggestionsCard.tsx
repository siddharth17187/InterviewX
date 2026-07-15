import { FaRobot } from "react-icons/fa";

interface Props {
  analysis: any;
}

export default function SuggestionsCard({ analysis }: Props) {
  if (!analysis) return null;

  return (
    <div className="rounded-3xl bg-white p-4 shadow-md sm:p-6 lg:p-8">

      <div className="mb-6 flex items-center gap-3">

        <FaRobot className="text-2xl text-blue-600 sm:text-3xl" />

        <h2 className="text-xl font-bold sm:text-2xl">
          AI Suggestions
        </h2>

      </div>

      {analysis.suggestions?.length ? (

        <div className="space-y-4">

          {analysis.suggestions.map((item: string, index: number) => (

            <div
              key={index}
              className="rounded-2xl border border-blue-100 bg-blue-50 p-4"
            >
              <div className="flex items-start gap-3">

                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="break-words text-sm leading-6 text-gray-700 sm:text-base">
                  {item}
                </p>

              </div>
            </div>

          ))}

        </div>

      ) : (

        <div className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
          No AI suggestions available.
        </div>

      )}

    </div>
  );
}