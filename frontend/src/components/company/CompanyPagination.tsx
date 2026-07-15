interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CompanyPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];

    // Mobile
    if (window.innerWidth < 640) {
      pages.push(0);

      if (page > 2) pages.push("...");

      if (page > 1) pages.push(page - 1);

      if (page !== 0 && page !== totalPages - 1)
        pages.push(page);

      if (page < totalPages - 2) pages.push(page + 1);

      if (page < totalPages - 3) pages.push("...");

      if (totalPages > 1) pages.push(totalPages - 1);

      return [...new Set(pages)];
    }

    // Desktop
    return Array.from(
      { length: totalPages },
      (_, i) => i
    );
  };

  const pages = getPages();

  return (
    <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">

      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 0}
        className="px-4 py-2 rounded-xl border bg-white shadow-sm hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ←
      </button>

      {pages.map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className="px-2 text-gray-500 font-semibold"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(Number(item))}
            className={`w-10 h-10 rounded-xl font-semibold transition ${
              page === item
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white border hover:bg-blue-50"
            }`}
          >
            {Number(item) + 1}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages - 1}
        className="px-4 py-2 rounded-xl border bg-white shadow-sm hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        →
      </button>

    </div>
  );
}