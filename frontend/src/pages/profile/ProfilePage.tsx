import { useEffect, useState } from "react";
import { toast } from "sonner";

import Sidebar from "../dashboard/Sidebar";

import ProfileSidebar from "../../components/profile/ProfileSidebar";
import EducationSection from "../../components/profile/EducationSection";
import SkillsSection from "../../components/profile/SkillsSection";
import AboutSection from "../../components/profile/AboutSection";
import LinksSection from "../../components/profile/LinksSection";
import AccountSection from "../../components/profile/AccountSection";
import EditProfileModal from "../../components/profile/EditProfileModal";

import {
  getProfile,
  updateProfile,
} from "../../services/profileService";

import type { Profile } from "../../types/profile";

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const loadProfile = async () => {
    try {
      const response = await getProfile();

      setProfile(response.data.data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleSaveProfile = async (updatedProfile: Profile) => {
    try {
      await updateProfile(updatedProfile);

      toast.success("Profile Updated Successfully");

      setOpenModal(false);

      loadProfile();
    } catch (error) {
      console.error(error);

      toast.error("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center">
        Profile Not Found
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 overflow-y-auto mt-16 p-4 sm:p-6 lg:ml-72 lg:mt-0 lg:p-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
                My Profile
              </h1>

              <p className="mt-2 text-slate-500">
                View and manage your personal information
              </p>

            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
            >
              Edit Profile
            </button>

          </div>

          {/* Content */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

            {/* Left */}

            <div className="lg:col-span-3">

              <ProfileSidebar
                profile={profile}
                onImageUploaded={loadProfile}
              />

            </div>

            {/* Right */}

            <div className="space-y-6 lg:col-span-9">

              <EducationSection profile={profile} />

              <SkillsSection profile={profile} />

              <AboutSection profile={profile} />

              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                <LinksSection profile={profile} />

                <AccountSection profile={profile} />

              </div>

            </div>

          </div>

        </div>

      </div>

      <EditProfileModal
        open={openModal}
        profile={profile}
        onClose={() => setOpenModal(false)}
        onSave={handleSaveProfile}
      />

    </div>
  );
}