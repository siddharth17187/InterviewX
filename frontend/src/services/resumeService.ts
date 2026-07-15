import api from "./api";

export const analyzeResume = async (
  resume: File,
  jobDescription: string
) => {

  const formData = new FormData();

  formData.append("resume", resume);
  formData.append("jobDescription", jobDescription);

  const response = await api.post(
    "/resume/analyze",
    formData
  );

  return response;
};