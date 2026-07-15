import { FaSearch } from "react-icons/fa";

interface Props {
  keyword: string;
  setKeyword: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
}

export default function CompanySearch({
  keyword,
  setKeyword,
  onSearch,
  loading,
}: Props) {

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="rounded-2xl bg-white p-3 shadow-md">

      <div className="flex items-center overflow-hidden rounded-xl border">

        <div className="px-4 text-gray-500">
          <FaSearch className="text-lg" />
        </div>

        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search company, role or location..."
          className="flex-1 px-2 py-4 text-base outline-none"
        />

        <button
          onClick={onSearch}
          disabled={loading}
          className="bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 sm:px-8"
        >
          {loading ? "..." : "Search"}
        </button>

      </div>

    </div>
  );
}