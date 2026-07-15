export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        
        <h1 className="text-4xl font-bold text-center text-green-600">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Last Updated: July 2026
        </p>

        <section className="mt-10 space-y-8">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              InterviewX collects information that you provide during registration and while using the platform.
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Profile Information</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold">
              2. How We Use Your Information
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              We use your information to provide and improve InterviewX services.
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
              <li>Create and manage your account.</li>
              <li>Generate AI interview reports.</li>
              <li>Analyze resumes.</li>
              <li>Improve platform performance.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold">
              3. Data Security
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              InterviewX is committed to protecting your personal information. We use reasonable security measures to safeguard your data from unauthorized access, modification, or disclosure.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold">
              4. Cookies
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              InterviewX may use cookies and similar technologies to improve user experience, remember preferences, and analyze platform usage.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold">
              5. User Rights
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              Users have the right to update their profile information and request deletion of their account by contacting the InterviewX support team.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold">
              6. Contact Information
            </h2>
            <p className="mt-3 text-gray-700 leading-8">
              If you have any questions regarding this Privacy Policy, please contact us.
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

        {/* Navigation Action */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
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
            Your privacy matters to us.
          </p>
        </div>

      </div>
    </div>
  );
}