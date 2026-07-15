import type { Company } from "../../types/company";
import CompanyCard from "./CompanyCard";

interface Props {
  companies: Company[];
  onViewDetails: (company: Company) => void;
}

export default function CompanyList({
  companies,
  onViewDetails,
}: Props) {

  if (companies.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        No Companies Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {companies.map((company, index) => (
        <CompanyCard
          key={company.id ?? index}
          company={company}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}