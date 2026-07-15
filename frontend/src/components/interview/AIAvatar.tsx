import { FaRobot } from "react-icons/fa";

interface Props {

    speaking: boolean;

}

export default function AIAvatar({

    speaking,

}: Props) {

    return (

        <div className="flex flex-col items-center">

            <div
                className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-6xl shadow-xl transition-all duration-300 ${
                    speaking
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-110 animate-pulse"
                        : "bg-gradient-to-r from-slate-600 to-slate-800"
                }`}
            >

                <FaRobot />

            </div>

            <p className="mt-5 font-semibold text-gray-700">

                {speaking
                    ? "AI is speaking..."
                    : "Waiting..."}

            </p>

        </div>

    );

}