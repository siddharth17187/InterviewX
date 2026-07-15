import { useEffect, useMemo, useState } from "react";
import UsersTable from "./UserTable";
import { getAllUsers } from "../../services/adminService";

export default function AdminDashboard() {

  const [data, setData] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 10;

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {

    try {

      const response = await getAllUsers();

      setData(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load users");

    } finally {

      setLoading(false);

    }

  }

  const filteredUsers = useMemo(() => {

    if (!data) return [];

    return data.users

      .filter(
        (user: any) =>

          user.fullName
            .toLowerCase()
            .includes(search.toLowerCase()) ||

          user.email
            .toLowerCase()
            .includes(search.toLowerCase())

      )

      .sort((a: any, b: any) =>
        a.fullName.localeCompare(b.fullName)
      );

  }, [data, search]);

  const totalPages = Math.ceil(
    filteredUsers.length / USERS_PER_PAGE
  );

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  useEffect(() => {

    setCurrentPage(1);

  }, [search]);

  useEffect(() => {

    if (
      currentPage > totalPages &&
      totalPages > 0
    ) {

      setCurrentPage(totalPages);

    }

  }, [currentPage, totalPages]);

  if (loading) {

    return (

      <div className="flex h-screen items-center justify-center text-xl font-semibold">

        Loading...

      </div>

    );

  }return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Manage all registered users
          </p>

        </div>

      </div>

      {/* Total Users Card */}

      <div className="mb-8 rounded-2xl bg-white p-5 shadow sm:p-6">

        <h2 className="text-base text-gray-600 sm:text-lg">
          Total Users
        </h2>

        <p className="mt-3 text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl">
          {data.totalUsers}
        </p>

      </div>

      {/* Search */}

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 sm:text-base"
        />

      </div>

      {/* Users Table */}

      <div className="overflow-x-auto rounded-2xl bg-white shadow">

        <UsersTable
          users={currentUsers}
          refresh={loadUsers}
        />

      </div>

      {/* Pagination */}

      <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">

        <p className="text-sm font-medium text-gray-600">

          Showing Page {currentPage} of {totalPages || 1}

        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (

            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`h-10 w-10 rounded-lg font-semibold transition ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "border bg-white hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>

          ))}

          <button
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>

        </div>

      </div>

    </div>

  );

}