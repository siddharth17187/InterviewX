interface Props {
  jobDescription: string;
  setJobDescription: (value: string) => void;
}

export default function JobDescription({
  jobDescription,
  setJobDescription,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-md sm:p-6 lg:p-8">

      <h2 className="mb-6 text-xl font-bold sm:text-2xl">
        Job Description
      </h2>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        rows={14}
        className="
          w-full
          resize-none
          rounded-xl
          border
          border-gray-300
          p-4
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          sm:text-base
        "
        placeholder="Paste the Job Description here..."
      />

      

    </div>
  );
}