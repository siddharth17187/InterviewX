interface Props {

  search: string;

  setSearch: (value: string) => void;

}

export default function CodingSearch({

  search,

  setSearch,

}: Props) {

  return (

    <div className="bg-white rounded-2xl shadow p-5">

      <input

        type="text"

        placeholder="Search question..."

        value={search}

        onChange={(e) =>

          setSearch(e.target.value)

        }

        className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"

      />

    </div>

  );

}