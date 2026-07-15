import api from "./api";
import type { Company } from "../types/company";

export interface CompanyPage {
  content: Company[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

export const getCompanies = async (
  keyword: string,
  location: string,
  jobType: string,
  experience: string,
  page = 0,
  size = 10,
  sortBy = "postedDate",
  direction = "desc"
): Promise<CompanyPage> => {

  const response = await api.get("/companies/jobs", {
    params: {
      keyword,
      location,
      jobType,
      experience,
      page,
      size,
      sortBy,
      direction,
    },
  });

  return response.data.data;
};

export const getCompanyById = async (
  id: number
): Promise<Company> => {

  const response = await api.get(`/companies/${id}`);

  return response.data.data;

};

export const syncJobs = async (
  keyword: string
) => {

  const response = await api.post(
    `/companies/sync?keyword=${encodeURIComponent(keyword)}`
  );

  return response.data;

};