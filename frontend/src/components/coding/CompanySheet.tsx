const companies = [

  "Amazon",

  "Google",

  "Microsoft",

  "Adobe",

  "Oracle",

  "Flipkart",

  "Goldman Sachs",

  "Infosys",

  "TCS",

  "Cognizant",

];

export default function CompanySheet() {

  return (

    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold">

        Company Sheets

      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

        {companies.map((company) => (

          <button

            key={company}

            className="border rounded-xl p-4 hover:bg-blue-600 hover:text-white transition"

          >

            {company}

          </button>

        ))}

      </div>

    </div>

  );

}