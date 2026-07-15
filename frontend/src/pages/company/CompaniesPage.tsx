import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";

import CompanySearch from "../../components/company/CompanySearch";
import CompanyFilter from "../../components/company/CompanyFilter";
import CompanySort from "../../components/company/CompanySort";
import CompanyList from "../../components/company/CompanyList";
import CompanySkeleton from "../../components/company/CompanySkeleton";
import CompanyPagination from "../../components/company/CompanyPagination";

import {
  getCompanies,
  syncJobs,
} from "../../services/CompanyService";

import { useCompany } from "../../context/CompanyContext";

export default function CompaniesPage() {
  const navigate = useNavigate();

  const {
    companies,
    setCompanies,
    keyword,
    setKeyword,
  } = useCompany();

  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [sortBy, setSortBy] = useState("postedDate");
  const [direction, setDirection] = useState("desc");

  useEffect(() => {
    loadCompanies();
  }, [page, pageSize, sortBy, direction]);

  useEffect(() => {
    setPage(0);
  }, [
    keyword,
    location,
    jobType,
    experience,
    sortBy,
    direction,
  ]);

  const loadCompanies = async () => {
    try {
      setLoading(true);

      const response = await getCompanies(
        keyword,
        location,
        jobType,
        experience,
        page,
        pageSize,
        sortBy,
        direction
      );

      setCompanies(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await getCompanies(
        keyword,
        location,
        jobType,
        experience,
        0,
        pageSize,
        sortBy,
        direction
      );

      setCompanies(response.content);
      setTotalPages(response.totalPages);

      setPage(0);
    } catch (error) {
      console.error(error);
      alert("Failed to search jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleSync = async () => {
    if (!keyword.trim()) {
      alert("Please enter a keyword.");
      return;
    }

    try {
      setLoading(true);

      await syncJobs(keyword);

      await loadCompanies();

      alert("Jobs synced successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to sync jobs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 overflow-y-auto mt-16 p-4 sm:p-6 lg:ml-72 lg:mt-0 lg:p-8">

        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <h1 className="text-3xl font-bold sm:text-4xl">
            Companies
          </h1>

          <p className="mt-2 text-gray-500">
            Explore jobs from top companies
          </p>

          {/* Search */}

          <div className="mt-8">
            <CompanySearch
              keyword={keyword}
              setKeyword={setKeyword}
              onSearch={handleSearch}
              loading={loading}
            />
          </div>

          {/* Filters */}

          {/* Filters */}

<div className="mt-6 overflow-x-auto">

  <div className="flex gap-4 min-w-max">

    <CompanyFilter
      location={location}
      setLocation={setLocation}
      jobType={jobType}
      setJobType={setJobType}
      experience={experience}
      setExperience={setExperience}
    />

    <CompanySort
      sortBy={sortBy}
      setSortBy={setSortBy}
      direction={direction}
      setDirection={setDirection}
    />

    <button
      onClick={() => {
        setKeyword("");
        setLocation("");
        setJobType("");
        setExperience("");
        setSortBy("postedDate");
        setDirection("desc");
        setPage(0);
        loadCompanies();
      }}
      className="whitespace-nowrap rounded-xl bg-gray-200 px-5 py-3 font-medium hover:bg-gray-300"
    >
      Clear Filters
    </button>

  </div>

</div>

          {/* Bottom Actions */}

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <label className="font-medium">
                Jobs per page
              </label>

              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(0);
                }}
                className="rounded-xl border px-3 py-2"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>

            </div>

          </div>

          {/* Company List */}

          <div className="mt-8">

            {loading ? (

              <CompanySkeleton />

            ) : (

              <>
                <CompanyList
                  companies={companies}
                  onViewDetails={(company) =>
                    navigate("/companies/details", {
                      state: company,
                    })
                  }
                />

                <CompanyPagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}