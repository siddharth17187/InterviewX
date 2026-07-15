import type { Company } from "../../types/company";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";

interface Props {
  company: Company;
  onViewDetails: (company: Company) => void;
}

export default function CompanyCard({
  company,
  onViewDetails,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      <div className="flex justify-center pt-6">
        <img
          src={company.logo}
          alt={company.name}
          className="w-20 h-20 object-contain"
        />
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold text-center">
          {company.name}
        </h2>

        <p className="text-blue-600 font-semibold text-center mt-2">
          {company.role}
        </p>

        <div className="space-y-3 mt-6">

          <div className="flex items-center gap-3 text-gray-600">
            <FaMapMarkerAlt className="text-red-500" />
            <span>{company.location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <FaMoneyBillWave className="text-green-600" />
            <span>{company.salary || "Not Disclosed"}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <FaBriefcase className="text-blue-600" />
            <span>
              {company.experience} • {company.jobType}
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <FaCalendarAlt className="text-orange-500" />
            <span>Posted : {company.deadline}</span>
          </div>

        </div>

        <button
          onClick={() => onViewDetails(company)}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          View Details
        </button>

      </div>

    </div>
  );
}