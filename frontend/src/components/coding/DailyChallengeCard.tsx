interface Props {

  title: string;

  difficulty: string;

  leetcodeUrl: string;

}

export default function DailyChallengeCard({

  title,

  difficulty,

  leetcodeUrl,

}: Props) {

  const solveNow = () => {

    if (leetcodeUrl && leetcodeUrl !== "#") {

      window.open(leetcodeUrl, "_blank");

    }

  };

  return (

    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow">

      <p className="text-sm">

        🔥 Daily Challenge

      </p>

      <h2 className="text-2xl font-bold mt-2">

        {title}

      </h2>

      <p className="mt-2">

        Difficulty: {difficulty}

      </p>

      <button

        onClick={solveNow}

        className="mt-5 bg-white text-blue-600 px-5 py-2 rounded-xl font-semibold hover:bg-gray-100"

      >

        Solve Now

      </button>

    </div>

  );

}