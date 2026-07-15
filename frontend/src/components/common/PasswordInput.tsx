import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function PasswordInput({
  label,
  error,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">

      {label && (
        <label className="mb-2 block font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={`w-full rounded-xl border p-3 pr-12 outline-none transition
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-600"
          }`}
        />

        <button
          type="button"
          className="absolute right-3 top-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}