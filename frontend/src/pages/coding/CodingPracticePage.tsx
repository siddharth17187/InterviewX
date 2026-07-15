import { useEffect, useState } from "react";
import Sidebar from "../dashboard/Sidebar";

import CodingHeader from "../../components/coding/CodingHeader";
import ProgressCard from "../../components/coding/ProgressCard";
import DailyChallengeCard from "../../components/coding/DailyChallengeCard";
import ContinueLearningCard from "../../components/coding/ContinueLearningCard";
import CompanySheet from "../../components/coding/CompanySheet";
import CodingSearch from "../../components/coding/CodingSearch";
import CodingFilter from "../../components/coding/CodingFilter";
import TopicAccordion from "../../components/coding/TopicAccordion";

import {
  getQuestions,
  getProgress,
  getDailyChallenge,
  getContinueLearning,
} from "../../services/CodingServices";

import { useCoding } from "../../context/CodingContext";

export default function CodingPracticePage() {
  const {
    questions,
    setQuestions,
    progress,
    setProgress,
    search,
    setSearch,
    difficulty,
    setDifficulty,
    company,
    setCompany,
  } = useCoding();

  const [loading, setLoading] = useState(false);

  const [dailyChallenge, setDailyChallenge] = useState<any>(null);

  const [continueLearning, setContinueLearning] = useState<any>(null);

  useEffect(() => {
    loadQuestions();
    loadProgress();
    loadDailyChallenge();
    loadContinueLearning();
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [search, difficulty, company]);

  const loadQuestions = async () => {
    try {
      setLoading(true);

      const data = await getQuestions(
        search,
        "",
        difficulty,
        company
      );

      setQuestions(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadProgress = async () => {
    try {
      const data = await getProgress();
      setProgress(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadDailyChallenge = async () => {
    try {
      const data = await getDailyChallenge();
      setDailyChallenge(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadContinueLearning = async () => {
    try {
      const data = await getContinueLearning();
      setContinueLearning(data);
    } catch (error) {
      console.error(error);
    }
  };

  const refreshDashboard = () => {
    loadProgress();
    loadDailyChallenge();
    loadContinueLearning();
    loadQuestions();
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 overflow-y-auto mt-16 p-4 sm:p-6 lg:ml-72 lg:mt-0 lg:p-8">

        <div className="mx-auto max-w-7xl">

          <CodingHeader />

          <div className="mt-8">
            <ProgressCard />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

            <DailyChallengeCard
              title={dailyChallenge?.title ?? "Loading..."}
              difficulty={dailyChallenge?.difficulty ?? ""}
              leetcodeUrl={dailyChallenge?.leetcodeUrl ?? "#"}
            />

            <ContinueLearningCard
              title={continueLearning?.title ?? "Loading..."}
              topic={continueLearning?.topic ?? ""}
              difficulty={continueLearning?.difficulty ?? ""}
              leetcodeUrl={continueLearning?.leetcodeUrl ?? "#"}
            />

          </div>

          <div className="mt-8">
            <CompanySheet />
          </div>

          <div className="mt-8">
            <CodingSearch
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="mt-6">
            <CodingFilter
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              company={company}
              setCompany={setCompany}
            />
          </div>

          <div className="mt-8">
            <TopicAccordion
              questions={questions}
              loading={loading}
              refreshProgress={refreshDashboard}
            />
          </div>

        </div>

      </div>

    </div>
  );
}