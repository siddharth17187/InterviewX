import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Company } from "../types/company";

interface CompanyContextType {
  companies: Company[];
  setCompanies: React.Dispatch<React.SetStateAction<Company[]>>;

  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const CompanyContext = createContext<CompanyContextType | null>(null);

export function CompanyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [keyword, setKeyword] = useState("");

  return (
    <CompanyContext.Provider
      value={{
        companies,
        setCompanies,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error("useCompany must be used inside CompanyProvider");
  }

  return context;
}