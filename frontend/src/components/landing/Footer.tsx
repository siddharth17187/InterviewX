export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white py-8">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-blue-400">
          InterviewX
        </h2>

        <p className="mt-3 text-gray-300">
          AI-Powered Resume Analysis, Coding Practice,
           Mock Interview Platform.
        </p>

        <div className="mt-6 border-t border-slate-700 pt-6">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} InterviewX. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Developed as an AI-Based Interview Preparation Platform.
          </p>

        </div>

      </div>

    </footer>
  );
}