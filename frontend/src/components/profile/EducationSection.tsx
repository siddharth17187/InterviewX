import {
  FaGraduationCap,
  FaUniversity,
  FaBook,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

import type { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
}

export default function EducationSection({ profile }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FaGraduationCap className="text-blue-600 text-3xl" />
        <h2 className="text-3xl font-bold">
          Education
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-6">

        <InfoCard
          icon={<FaUniversity />}
          title="College"
          value={profile.college}
        />

        <InfoCard
          icon={<FaGraduationCap />}
          title="Degree"
          value={profile.degree}
        />

        <InfoCard
          icon={<FaBook />}
          title="Branch"
          value={profile.branch}
        />

        <InfoCard
          icon={<FaCalendarAlt />}
          title="Graduation Year"
          value={profile.graduationYear}
        />

        <div className="col-span-2">
          <InfoCard
            icon={<FaStar />}
            title="CGPA"
            value={profile.cgpa}
          />
        </div>

      </div>

    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number | null | undefined;
}

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5 hover:shadow-md transition">

      <div className="flex items-center gap-3 mb-3 text-blue-600">

        <div className="text-xl">
          {icon}
        </div>

        <span className="font-semibold">
          {title}
        </span>

      </div>

      <p
        className={`text-xl font-bold ${
          value
            ? "text-slate-800"
            : "text-gray-400 italic"
        }`}
      >
        {value || "Not Added"}
      </p>

    </div>
  );
}