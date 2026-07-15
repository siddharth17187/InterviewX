import { motion } from "framer-motion";
import Confetti from "react-confetti";

interface Props {

  open: boolean;

  title: string;

  onClose: () => void;

}

export default function CongratulationsModal({

  open,
  title,
  onClose,

}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <Confetti recycle={false} numberOfPieces={300} />

      <motion.div

        initial={{ scale: 0.5, opacity: 0 }}

        animate={{ scale: 1, opacity: 1 }}

        className="bg-white rounded-3xl p-10 w-[500px] text-center shadow-2xl"

      >

        <div className="text-7xl">

          🎉

        </div>

        <h2 className="text-3xl font-bold mt-4">

          Congratulations!

        </h2>

        <p className="mt-3 text-lg text-gray-600">

          You completed

        </p>

        <h3 className="text-2xl font-bold mt-2">

          {title}

        </h3>

        <div className="mt-6 bg-blue-100 rounded-xl p-4">

          <p className="text-blue-700 font-bold text-xl">

            +10 XP Earned

          </p>

        </div>

        <button

          onClick={onClose}

          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"

        >

          Continue

        </button>

      </motion.div>

    </div>

  );

}