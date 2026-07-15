import { ArrowRight, PlayCircle, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 flex items-center">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-20">

        {/* Left Section */}
        <div className="text-center lg:text-left">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
            🚀 AI Powered Career Platform
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Ace Your
            <br />
            Dream Job
            <br />
            <span className="text-blue-600">
              with InterviewX AI
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg lg:text-xl">
            Prepare for your dream job with AI-powered Resume Analysis,
            Mock Interviews, Coding Challenges, Aptitude Tests and
            personalized feedback—all in one platform.
          </p>

          
          

        </div>

        {/* Right Section */}
        <div>

          {/* Desktop */}
          <div className="relative hidden h-[450px] w-[450px] lg:block">

            <div className="absolute left-0 top-5 w-72 rounded-2xl bg-white p-6 shadow-xl transition hover:scale-105">

              <h3 className="text-xl font-bold text-blue-600">
                🤖 AI Resume Analyzer
              </h3>

              <p className="mt-3 text-gray-600">
                Get ATS score, keyword analysis and AI suggestions instantly.
              </p>

            </div>

            <div className="absolute right-0 top-40 w-72 rounded-2xl bg-white p-6 shadow-xl transition hover:scale-105">

              <h3 className="text-xl font-bold text-green-600">
                💻 Coding Practice
              </h3>

              <p className="mt-3 text-gray-600">
                Practice coding questions with detailed explanations.
              </p>

            </div>

            <div className="absolute bottom-0 left-10 w-72 rounded-2xl bg-white p-6 shadow-xl transition hover:scale-105">

              <h3 className="text-xl font-bold text-purple-600">
                🎤 AI Mock Interview
              </h3>

              <p className="mt-3 text-gray-600">
                Experience realistic interviews with AI feedback.
              </p>

            </div>

          </div>

          {/* Mobile & Tablet */}
          <div className="space-y-5 lg:hidden">

            <div className="rounded-2xl bg-white p-6 shadow-lg">

              <h3 className="text-lg font-bold text-blue-600">
                🤖 AI Resume Analyzer
              </h3>

              <p className="mt-2 text-gray-600">
                Get ATS score, keyword analysis and AI suggestions instantly.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">

              <h3 className="text-lg font-bold text-green-600">
                💻 Coding Practice
              </h3>

              <p className="mt-2 text-gray-600">
                Practice coding questions with detailed explanations.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">

              <h3 className="text-lg font-bold text-purple-600">
                🎤 AI Mock Interview
              </h3>

              <p className="mt-2 text-gray-600">
                Experience realistic interviews with AI feedback.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}