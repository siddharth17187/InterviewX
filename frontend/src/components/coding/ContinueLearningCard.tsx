interface Props {

    title: string;

    topic: string;

    difficulty: string;

    leetcodeUrl: string;

}

export default function ContinueLearningCard({

    title,

    topic,

    difficulty,

    leetcodeUrl,

}: Props) {

    return (

        <div className="bg-white rounded-2xl shadow p-6">

            <p className="text-gray-500">

                Continue Learning

            </p>

            <h2 className="text-2xl font-bold mt-2">

                {title}

            </h2>

            <p className="mt-2">

                {topic} • {difficulty}

            </p>

            <button

                onClick={() => window.open(leetcodeUrl)}

                className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl"

            >

                Continue

            </button>

        </div>

    );

}