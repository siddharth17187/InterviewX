export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Last Updated: July 2026
        </p>

        <section className="mt-10 space-y-8">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              By creating an account or using InterviewX, you agree to comply with these Terms & Conditions.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold">
              2. Purpose of InterviewX
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              InterviewX is an interview preparation platform designed for students and job seekers. It provides coding practice, AI mock interviews, resume analysis, and company preparation resources.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
              <li>Provide accurate registration details.</li>
              <li>Keep your account credentials secure.</li>
              <li>Do not misuse or abuse the platform.</li>
              <li>Do not attempt unauthorized access.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold">
              4. AI Disclaimer
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              AI-generated interview questions, feedback, resume analysis, and recommendations are for educational purposes only and may not always be accurate.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold">
              5. Company Information
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              Company names, job listings, interview questions, and preparation resources available on InterviewX are provided for educational purposes only. InterviewX is not affiliated with any company unless explicitly stated.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold">
              6. Intellectual Property
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              All content, designs, logos, graphics, source code, and learning materials available on InterviewX are the intellectual property of InterviewX and may not be copied, modified, or distributed without permission.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold">
              7. Limitation of Liability
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              InterviewX is a learning platform intended to assist users in interview preparation. We do not guarantee job placement, interview success, or employment opportunities.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold">
              8. Changes to Terms
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              InterviewX reserves the right to modify these Terms & Conditions at any time. Continued use of the platform after updates means you accept the revised terms.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold">
              9. Contact Information
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              If you have any questions regarding these Terms & Conditions, please contact us.
            </p>
            <div className="mt-5 bg-slate-100 rounded-2xl p-6">
              <p className="font-semibold">
                InterviewX Support
              </p>
              <p className="mt-2">
                Email:
                <span className="text-blue-600 ml-2">
                  siddharthkadhane@gmail.com
                </span>
              </p>
            </div>
          </div>
          

        </section>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-center text-gray-500">
          <p>
            © 2026 InterviewX. All Rights Reserved.
          </p>
          <p className="mt-2">
            Practice • Prepare • Achieve
          </p>
        </div>

      </div>
    </div>
  );
}