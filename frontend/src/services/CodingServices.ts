import api from "./api";

export const getQuestions = async (
  keyword = "",
  topic = "",
  difficulty = "",
  company = ""
) => {

  const response = await api.get("/coding/questions", {

    params: {

      keyword,

      topic,

      difficulty,

      company,

    },

  });

  return response.data.data;

};

export const getProgress = async () => {

  const response = await api.get("/coding/progress");

  return response.data.data;

};

export const markSolved = async (id: number) => {

  const response = await api.post(
    `/coding/questions/${id}/solve`
  );

  return response.data;

};

export const bookmarkQuestion = async (id: number) => {

  const response = await api.post(
    `/coding/questions/${id}/bookmark`
  );

  return response.data;

};

export const getDailyChallenge = async () => {

    const response =
            await api.get("/coding/daily");

    return response.data.data;

};

export const getContinueLearning = async () => {

    const response =
        await api.get("/coding/continue");

    return response.data.data;

};