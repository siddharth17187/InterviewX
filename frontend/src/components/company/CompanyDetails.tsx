import type { Company } from "../../types/company";

interface Props {

  company: Company;

}

export default function CompanyDetails({

  company,

}: Props) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-10">

      <div className="flex items-center gap-6">

        <img

          src={company.logo}

          className="w-24 h-24 object-contain"

        />

        <div>

          <h1 className="text-4xl font-bold">

            {company.name}

          </h1>

          <p className="text-blue-600 text-xl mt-2">

            {company.role}

          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">

        <div>

          <h3 className="font-semibold">

            Salary

          </h3>

          {company.salary}

        </div>

        <div>

          <h3 className="font-semibold">

            Experience

          </h3>

          {company.experience}

        </div>

        <div>

          <h3 className="font-semibold">

            Location

          </h3>

          {company.location}

        </div>

        <div>

          <h3 className="font-semibold">

            Job Type

          </h3>

          {company.jobType}

        </div>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold">

          Job Description

        </h2>

        <p className="mt-4 text-gray-700">

          {company.description}

        </p>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold">

          Responsibilities

        </h2>

        <p className="mt-4 text-gray-700">

          {company.responsibilities}

        </p>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold">

          Requirements

        </h2>

        <p className="mt-4 text-gray-700">

          {company.requirements}

        </p>

      </div>

      <div className="mt-10">

        <h2 className="text-2xl font-bold">

          Skills

        </h2>

        <p className="mt-4 text-gray-700">

          {company.skills}

        </p>

      </div>

      <button

        onClick={() =>

          window.open(

            company.applyUrl,

            "_blank"

          )

        }

        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl"

      >

        Apply on Official Career Page

      </button>

    </div>

  );

}