import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  ...props
}: InputProps) {
  return (
    <div className="mb-5">
      <label className="mb-2 block font-medium">{label}</label>

      <input
        {...props}
        className={`w-full rounded-xl border p-3 outline-none transition
        ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:border-blue-600"
        }`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}