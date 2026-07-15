import {
  createContext,
  useContext,
  useState,
} from "react";

import type {
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface CodingQuestion {

  id: number;

  title: string;

  topic: string;

  difficulty: "EASY" | "MEDIUM" | "HARD";

  companies: string;

  frequency: string;

  acceptanceRate: string;

  leetcodeUrl: string;

  hackerRankUrl: string;

  solved: boolean;

  bookmarked: boolean;

}

export interface CodingProgress {

  totalQuestions: number;

  solvedQuestions: number;

  bookmarkedQuestions: number;

  xp: number;

  streak: number;

  completionPercentage: number;

}

interface CodingContextType {

  questions: CodingQuestion[];

  setQuestions: Dispatch<
    SetStateAction<CodingQuestion[]>
  >;

  progress: CodingProgress;

  setProgress: Dispatch<
    SetStateAction<CodingProgress>
  >;

  search: string;

  setSearch: Dispatch<
    SetStateAction<string>
  >;

  difficulty: string;

  setDifficulty: Dispatch<
    SetStateAction<string>
  >;

  company: string;

  setCompany: Dispatch<
    SetStateAction<string>
  >;

}

const CodingContext =
  createContext<CodingContextType | undefined>(
    undefined
  );

export function CodingProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [questions, setQuestions] =
    useState<CodingQuestion[]>([]);

  const [search, setSearch] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [progress, setProgress] =
    useState<CodingProgress>({

      totalQuestions: 0,

      solvedQuestions: 0,

      bookmarkedQuestions: 0,

      xp: 0,

      streak: 0,

      completionPercentage: 0,

    });

  return (

    <CodingContext.Provider

      value={{

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

      }}

    >

      {children}

    </CodingContext.Provider>

  );

}

export function useCoding() {

  const context =
    useContext(CodingContext);

  if (!context) {

    throw new Error(
      "useCoding must be used within CodingProvider"
    );

  }

  return context;

}