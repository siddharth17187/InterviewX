import { FaRobot } from "react-icons/fa";
import { analyzeResume } from "../../services/resumeService";

interface Props {
  resumeFile: File | null;
  jobDescription: string;
  setAnalysis: (analysis: any) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export default function AnalyzeButton({
  resumeFile,
  jobDescription,
  setAnalysis,
  loading,
  setLoading,
}: Props) {

  const handleAnalyze = async () => {

    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter Job Description.");
      return;
    }

    try {

      setLoading(true);

      const response = await analyzeResume(
        resumeFile,
        jobDescription
      );

      
      console.log("FULL RESPONSE");
console.log(response);

console.log("RESPONSE DATA");
console.log(response.data);
      // Because resumeService returns response.data
      setAnalysis(response.data.data);

    } catch (error: any) {

      console.error("Resume Analysis Error:", error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      }

      alert("Failed to analyze resume.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex justify-center">

      <button
        disabled={loading}
        onClick={handleAnalyze}
        className={`flex items-center gap-3 px-10 py-4 rounded-2xl shadow-lg transition text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >

        <FaRobot />

        {loading
          ? "Analyzing Resume..."
          : "Analyze Resume with AI"}

      </button>

    </div>

  );

}