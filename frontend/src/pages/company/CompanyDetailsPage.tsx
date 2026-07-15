import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";

import type { Company } from "../../types/company";

export default function CompanyDetailsPage() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const company = state as Company;

  if (!company) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-6">

        <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
          No Company Data Found
        </h1>

        <button
          onClick={() => navigate("/companies")}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Back to Companies
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Main Card */}

        <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-8 lg:p-10">

          <div className="flex flex-col gap-8 md:flex-row">

            {/* Logo */}

            <div className="flex justify-center md:block">

              <img
                src={company.logo}
                alt={company.name}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32"
              />

            </div>

            {/* Company Info */}

            <div className="flex-1">

              <h1 className="text-center text-3xl font-bold md:text-left md:text-4xl">
                {company.name}
              </h1>

              <h2 className="mt-2 text-center text-xl text-blue-600 md:text-left md:text-2xl">
                {company.role}
              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex items-start gap-3">

                  <FaMapMarkerAlt className="mt-1 text-red-500" />

                  <span className="break-words">
                    {company.location}
                  </span>

                </div>

                <div className="flex items-start gap-3">

                  <FaMoneyBillWave className="mt-1 text-green-600" />

                  <span>
                    {company.salary || "Not Disclosed"}
                  </span>

                </div>

                <div className="flex items-start gap-3">

                  <FaBriefcase className="mt-1 text-blue-600" />

                  <span className="break-words">
                    {company.experience} • {company.jobType}
                  </span>

                </div>

                <div className="flex items-start gap-3">

                  <FaCalendarAlt className="mt-1 text-orange-500" />

                  <span>
                    {company.deadline}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Description */}

          <div className="mt-10">

            <h2 className="mb-4 text-xl font-bold sm:text-2xl">
              Job Description
            </h2>

            <div className="whitespace-pre-wrap rounded-xl border bg-gray-50 p-4 leading-7 sm:p-6">
              {company.description || "No description available."}
            </div>

          </div>

          {/* Apply Button */}

          {company.applyLink && (

            <div className="mt-8">

              <a
                href={company.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-green-600 px-8 py-3 text-center font-semibold text-white transition hover:bg-green-700 sm:inline-block sm:w-auto"
              >
                Apply Now
              </a>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}