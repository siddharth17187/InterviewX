import type{ ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white items-center justify-center">

        <div className="max-w-md px-10">

          <h1 className="text-5xl font-bold">
            InterviewX
          </h1>

          <p className="mt-6 text-xl">
            Practice Coding, Aptitude, Mock Interviews and Resume Analysis in one place.
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center bg-gray-100">

        {children}

      </div>

    </div>
  );
}