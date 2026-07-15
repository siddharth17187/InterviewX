interface Props {
  sortBy: string;
  setSortBy: (value: string) => void;

  direction: string;
  setDirection: (value: string) => void;
}

export default function CompanySort({
  sortBy,
  setSortBy,
  direction,
  setDirection,
}: Props) {
  const selectStyle =
    "min-w-[160px] flex-shrink-0 rounded-xl border bg-white px-4 py-3 outline-none focus:border-blue-500";

  return (
    <>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={selectStyle}
      >
        <option value="postedDate">🕒 Newest</option>
        <option value="salary">💰 Salary</option>
        <option value="name">🏢 Company</option>
        <option value="role">💼 Role</option>
      </select>

      <select
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        className={selectStyle}
      >
        <option value="desc">⬇ Descending</option>
        <option value="asc">⬆ Ascending</option>
      </select>
    </>
  );
}