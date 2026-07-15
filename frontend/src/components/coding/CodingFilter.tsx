interface Props {

  difficulty: string;

  setDifficulty: (value: string) => void;

  company: string;

  setCompany: (value: string) => void;

}

export default function CodingFilter({

  difficulty,

  setDifficulty,

  company,

  setCompany,

}: Props) {

  return (

    <div className="bg-white rounded-2xl shadow p-5 flex flex-wrap gap-5">

      <select

        value={difficulty}

        onChange={(e) =>

          setDifficulty(e.target.value)

        }

        className="border rounded-xl px-4 py-3"

      >

        <option value="">

          All Difficulty

        </option>

        <option value="EASY">

          Easy

        </option>

        <option value="MEDIUM">

          Medium

        </option>

        <option value="HARD">

          Hard

        </option>

      </select>

      <select

        value={company}

        onChange={(e) =>

          setCompany(e.target.value)

        }

        className="border rounded-xl px-4 py-3"

      >

        <option value="">

          All Companies

        </option>

        <option value="Amazon">

          Amazon

        </option>

        <option value="Google">

          Google

        </option>

        <option value="Microsoft">

          Microsoft

        </option>

        <option value="Adobe">

          Adobe

        </option>

        <option value="Oracle">

          Oracle

        </option>

        <option value="Flipkart">

          Flipkart

        </option>

      </select>

    </div>

  );

}