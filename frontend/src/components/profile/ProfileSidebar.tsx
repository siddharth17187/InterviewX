import { useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { toast } from "sonner";

import { uploadProfileImage } from "../../services/profileService";
import type { Profile } from "../../types/profile";

interface Props {
  profile: Profile;
  onImageUploaded: () => void;
}

export default function ProfileSidebar({
  profile,
  onImageUploaded,
}: Props) {
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size must be less than 2 MB.");
      return;
    }

    try {
      setUploading(true);

      await uploadProfileImage(file);

      toast.success("Profile image updated.");

      onImageUploaded();

    } catch (error) {
      console.error(error);

      toast.error("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const fields = [
    profile.fullName,
    profile.phone,
    profile.college,
    profile.degree,
    profile.branch,
    profile.graduationYear,
    profile.cgpa,
    profile.skills,
    profile.bio,
    profile.githubUrl,
    profile.linkedinUrl,
    profile.portfolioUrl,
    profile.profileImage,
  ];

  const completion = Math.round(
    (fields.filter(Boolean).length / fields.length) * 100
  );

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">

      {/* Cover */}
      <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600" />

      {/* Avatar */}
      <div className="flex justify-center -mt-16">

        <div className="relative">

          <img
            src={
              profile.profileImage
                ? `http://localhost:8080${profile.profileImage}`
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    profile.fullName
                  )}&background=2563eb&color=ffffff&size=200`
            }
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <label className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex justify-center items-center cursor-pointer shadow-lg">

            {uploading ? (
              <span className="text-xs">...</span>
            ) : (
              <FaCamera />
            )}

            <input
              type="file"
              accept=".png,.jpg,.jpeg,.webp"
              hidden
              onChange={handleImageUpload}
            />

          </label>

        </div>

      </div>

      {/* User Details */}
      <div className="p-8">

        <h2 className="text-2xl font-bold text-center">
          {profile.fullName}
        </h2>

        <p className="text-center text-gray-500 mt-2">
          {profile.degree || "Student"}
        </p>

        <div className="flex justify-center mt-4">

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            {profile.role}
          </span>

        </div>

        <hr className="my-6" />

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span>{profile.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            <span>{profile.phone || "Add phone number"}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>{profile.college || "Add college"}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaUserGraduate className="text-blue-600" />
            <span>{profile.degree || "Student"}</span>
          </div>

        </div>

        {/* Profile Completion */}
        <div className="mt-8">

          <div className="flex justify-between mb-2">

            <span className="font-semibold">
              Profile Completion
            </span>

            <span className="text-blue-600 font-bold">
              {completion}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-gray-200">

            <div
              className="h-3 rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${completion}%` }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}