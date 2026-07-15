interface Props {
  location: string;
  setLocation: (value: string) => void;

  jobType: string;
  setJobType: (value: string) => void;

  experience: string;
  setExperience: (value: string) => void;
}

export default function CompanyFilter({
  location,
  setLocation,
  jobType,
  setJobType,
  experience,
  setExperience,
}: Props) {
  const inputStyle =
    "min-w-[150px] flex-shrink-0 rounded-xl border bg-white px-4 py-3 outline-none focus:border-blue-500";

  return (
    <>
      <input
        type="text"
        placeholder="📍 Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={inputStyle}
      />

      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className={inputStyle}
      >
        <option value="">💼 Job Type</option>
        <option value="FULLTIME">Full Time</option>
        <option value="PARTTIME">Part Time</option>
        <option value="CONTRACTOR">Contract</option>
        <option value="INTERN">Internship</option>
      </select>

      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className={inputStyle}
      >
        <option value="">👨‍💻 Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="1">1 Year</option>
        <option value="2">2 Years</option>
        <option value="3">3 Years</option>
        <option value="5">5+ Years</option>
      </select>
    </>
  );
}