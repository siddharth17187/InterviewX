import {
  FaEnvelope,
  FaUserShield,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

import type { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
}

export default function AccountSection({ profile }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}
      <h2 className="text-3xl font-bold mb-8">
        Account Information
      </h2>

      <div className="space-y-6">

        <InfoRow
          icon={<FaEnvelope />}
          title="Email"
          value={profile.email}
        />

        <InfoRow
          icon={<FaPhone />}
          title="Phone"
          value={profile.phone || "Not Added"}
        />

        <InfoRow
          icon={<FaUserShield />}
          title="Role"
          value={profile.role}
        />

        <InfoRow
          icon={<FaCheckCircle />}
          title="Profile Status"
          value="Active"
          valueClassName="text-green-600"
        />

      </div>

    </div>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  valueClassName?: string;
}

function InfoRow({
  icon,
  title,
  value,
  valueClassName = "text-slate-800",
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-4">

      <div className="flex items-center gap-3 text-blue-600">

        <div className="text-xl">
          {icon}
        </div>

        <span className="font-medium text-slate-700">
          {title}
        </span>

      </div>

      <span className={`font-semibold ${valueClassName}`}>
        {value}
      </span>

    </div>
  );
}