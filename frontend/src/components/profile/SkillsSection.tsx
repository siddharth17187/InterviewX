import { FaCode } from "react-icons/fa";

interface Props {
  profile: any;
}

export default function SkillsSection({ profile }: Props) {
  const skills = profile.skills
    ? profile.skills.split(",").map((s: string) => s.trim())
    : [];

  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-3">
          <FaCode className="text-blue-600 text-3xl" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        

      </div>

      <div className="flex flex-wrap gap-3">

        {skills.length > 0 ? (
          skills.map((skill: string, index: number) => (
            <span
              key={index}
              className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold"
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-gray-500">No skills added.</p>
        )}

      </div>

    </div>
  );
}