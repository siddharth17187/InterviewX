import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";

import type { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
}

export default function LinksSection({ profile }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Header */}

      <h2 className="text-3xl font-bold mb-8">
        Professional Links
      </h2>

      <div className="space-y-5">

        <LinkCard
          icon={<FaGithub className="text-black text-2xl" />}
          title="GitHub"
          url={profile.githubUrl}
        />

        <LinkCard
          icon={<FaLinkedin className="text-blue-600 text-2xl" />}
          title="LinkedIn"
          url={profile.linkedinUrl}
        />

        <LinkCard
          icon={<FaGlobe className="text-green-600 text-2xl" />}
          title="Portfolio"
          url={profile.portfolioUrl}
        />

      </div>

    </div>
  );
}

interface LinkCardProps {
  icon: React.ReactNode;
  title: string;
  url?: string | null;
}

function LinkCard({
  icon,
  title,
  url,
}: LinkCardProps) {
  return (
    <div className="border rounded-2xl p-5 hover:shadow-md transition">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          {icon}

          <div>

            <h3 className="font-bold text-lg">
              {title}
            </h3>

            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {url}
              </a>
            ) : (
              <span className="text-gray-400 italic">
                Not Added
              </span>
            )}

          </div>

        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaExternalLinkAlt />
          </a>
        )}

      </div>

    </div>
  );
}