import { useState } from "react";

import Sidebar from "../dashboard/Sidebar";

import UploadResume from "../../components/resume/UploadResume";
import JobDescription from "../../components/resume/JobDescription";
import AnalyzeButton from "../../components/resume/AnalyzeButton";
import ScoreCards from "../../components/resume/ScoreCards";
import SkillsCard from "../../components/resume/SkillsCard";
import SuggestionsCard from "../../components/resume/SuggestionsCard";
import AnalyzingModal from "../../components/resume/AnalyzingModal";

export default function ResumePage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [jobDescription, setJobDescription] = useState("");

  const [analysis, setAnalysis] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <Sidebar />

      <div className="flex-1 overflow-y-auto pt-24 p-4 sm:p-6 lg:ml-72 lg:pt-8 lg:p-8">
        <div className="p-2 sm:p-4 lg:p-8">

          {/* Heading */}

          <div className="mb-8 lg:mb-10">

            <h1 className="text-3xl font-bold sm:text-4xl">
              AI Resume Analyzer
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Upload your resume and compare it with a Job Description.
            </p>

          </div>

          {/* Upload + Job Description */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            <UploadResume
              resumeFile={resumeFile}
              setResumeFile={setResumeFile}
            />

            <JobDescription
              jobDescription={jobDescription}
              setJobDescription={setJobDescription}
            />

          </div>

          {/* Analyze Button */}

          <div className="mt-6 sm:mt-8">

            <AnalyzeButton
              resumeFile={resumeFile}
              jobDescription={jobDescription}
              setAnalysis={setAnalysis}
              loading={loading}
              setLoading={setLoading}
            />

          </div>

          {/* Score Cards */}

          <div className="mt-6 sm:mt-8">

            <ScoreCards analysis={analysis} />

          </div>

          {/* Skills + Suggestions */}

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

            <SkillsCard analysis={analysis} />

            <SuggestionsCard analysis={analysis} />

          </div>

        </div>
      </div>

      <AnalyzingModal open={loading} />
    </div>
  );
}