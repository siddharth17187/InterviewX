import { FaUser } from "react-icons/fa";
import type { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
}

export default function AboutSection({ profile }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <FaUser className="text-blue-600 text-3xl" />

        <h2 className="text-3xl font-bold">
          About Me
        </h2>

      </div>

      {/* Bio */}
      <div className="bg-slate-50 rounded-2xl p-6">

        {profile.bio ? (

          <p className="text-gray-700 leading-8 text-lg">
            {profile.bio}
          </p>

        ) : (

          <div className="text-center py-8">

            <FaUser className="text-5xl text-gray-300 mx-auto mb-4" />

            <h3 className="text-xl font-semibold text-gray-500">
              No Bio Added
            </h3>

            <p className="text-gray-400 mt-2">
              Tell recruiters something about yourself.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}