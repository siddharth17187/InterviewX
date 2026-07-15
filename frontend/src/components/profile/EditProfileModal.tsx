import { useEffect, useState } from "react";
import type { Profile } from "../../types/profile";

interface Props {
  open: boolean;
  profile: Profile;
  onClose: () => void;
  onSave: (profile: Profile) => void;
}

export default function EditProfileModal({
  open,
  profile,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState(profile);

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Edit Profile
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold text-gray-500 hover:text-red-500"
          >
            ×
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <Input
            label="Full Name"
            name="fullName"
            value={form.fullName || ""}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
          />

          <Input
            label="College"
            name="college"
            value={form.college || ""}
            onChange={handleChange}
          />

          <Input
            label="Degree"
            name="degree"
            value={form.degree || ""}
            onChange={handleChange}
          />

          <Input
            label="Branch"
            name="branch"
            value={form.branch || ""}
            onChange={handleChange}
          />

          <Input
            label="Graduation Year"
            name="graduationYear"
            value={form.graduationYear || ""}
            onChange={handleChange}
          />

          <Input
            label="CGPA"
            name="cgpa"
            value={form.cgpa || ""}
            onChange={handleChange}
          />

          <Input
            label="Skills"
            name="skills"
            value={form.skills || ""}
            onChange={handleChange}
          />

          <Input
            label="GitHub"
            name="githubUrl"
            value={form.githubUrl || ""}
            onChange={handleChange}
          />

          <Input
            label="LinkedIn"
            name="linkedinUrl"
            value={form.linkedinUrl || ""}
            onChange={handleChange}
          />

          <Input
            label="Portfolio"
            name="portfolioUrl"
            value={form.portfolioUrl || ""}
            onChange={handleChange}
          />

        </div>

        {/* Bio */}

        <div className="mt-6">

          <label className="font-semibold">
            Bio
          </label>

          <textarea
            name="bio"
            value={form.bio || ""}
            onChange={handleChange}
            rows={5}
            className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">

          <button
            onClick={onClose}
            className="w-full rounded-xl border px-6 py-3 hover:bg-gray-100 sm:w-auto"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="w-full rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 sm:w-auto"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  value: any;
  onChange: any;
}

function Input({
  label,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <div>

      <label className="font-semibold">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

    </div>
  );
}