import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import {
  FaCode,
  FaRobot,
  FaFileAlt,
  FaBuilding,
  FaUserGraduate,
  FaArrowRight,
  FaRocket,
  FaLightbulb,
  FaBullseye,
} from "react-icons/fa";

export default function DashboardPage() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Coding Practice",
      description: "Master DSA with topic-wise practice.",
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500",
      path: "/coding",
    },
    {
      title: "AI Mock Interview",
      description: "Practice real interview conversations.",
      icon: <FaRobot />,
      color: "from-purple-500 to-pink-500",
      path: "/interview",
    },
    {
      title: "Resume Analyzer",
      description: "Improve ATS score instantly.",
      icon: <FaFileAlt />,
      color: "from-green-500 to-emerald-500",
      path: "/resume",
    },
    {
      title: "Companies",
      description: "Prepare company-wise questions.",
      icon: <FaBuilding />,
      color: "from-yellow-500 to-orange-500",
      path: "/companies",
    },
    {
      title: "Profile",
      description: "Manage your learning profile.",
      icon: <FaUserGraduate />,
      color: "from-indigo-500 to-violet-500",
      path: "/profile",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 lg:ml-72 overflow-y-auto p-4 sm:p-6 lg:p-8">

        {/* Hero */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 lg:p-10">

            <div>

              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs sm:text-sm text-white">
                🚀 Welcome to InterviewX
              </span>

              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">

                Prepare Smarter.
                <br />
                Crack Interviews Faster.

              </h1>

              <p className="mt-6 text-sm sm:text-base lg:text-lg leading-7 text-blue-100">

                InterviewX helps students become interview-ready through
                Coding Practice, AI Mock Interviews, Resume Analysis,
                Aptitude Preparation and Company-wise interview preparation.

              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <button
                  onClick={() => navigate("/coding")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105"
                >
                  Start Coding
                  <FaArrowRight />
                </button>

                <button
                  onClick={() => navigate("/companies")}
                  className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                >
                  Explore Companies
                </button>

              </div>

            </div>

            <div className="hidden lg:flex justify-center">

              <img
                src="https://illustrations.popsy.co/blue/designer.svg"
                alt="Interview"
                className="max-w-md w-full"
              />

            </div>

          </div>

        </div>{/* About InterviewX */}

        <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            <FaRocket className="text-4xl text-blue-600" />

            <div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                What is InterviewX?
              </h2>

              <p className="mt-2 text-gray-500 text-sm sm:text-base">
                Your Complete Interview Preparation Platform
              </p>

            </div>

          </div>

          <p className="mt-8 text-gray-600 leading-8 text-base sm:text-lg">

            InterviewX is an all-in-one interview preparation platform
            designed for students and fresh graduates.

            Instead of using multiple websites for coding practice,
            resume building, aptitude preparation and interview practice,
            InterviewX brings everything together in one modern platform.

          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="rounded-2xl bg-blue-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <FaBullseye className="text-4xl text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Our Mission
              </h3>

              <p className="mt-3 text-gray-600 leading-7">

                Help every student become confident,
                industry-ready and crack top company
                interviews successfully.

              </p>

            </div>

            <div className="rounded-2xl bg-green-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <FaLightbulb className="text-4xl text-green-600" />

              <h3 className="mt-5 text-xl font-bold">
                Smart Learning
              </h3>

              <p className="mt-3 text-gray-600 leading-7">

                Learn with structured roadmaps,
                coding challenges, aptitude tests
                and AI-powered interview practice.

              </p>

            </div>

            <div className="rounded-2xl bg-purple-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <FaRocket className="text-4xl text-purple-600" />

              <h3 className="mt-5 text-xl font-bold">
                Career Growth
              </h3>

              <p className="mt-3 text-gray-600 leading-7">

                Build your resume, improve your skills,
                practice consistently and land your
                dream job with confidence.

              </p>

            </div>

          </div>

        </div>{/* FEATURES */}

        <div className="mt-12">

          <div className="text-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">

              Everything You Need to Crack Interviews

            </h2>

            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-3xl mx-auto">

              Explore InterviewX modules designed to make your interview preparation structured,
              interactive and placement-ready.

            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {features.map((feature) => (

              <div
                key={feature.title}
                onClick={() => navigate(feature.path)}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`h-2 bg-gradient-to-r ${feature.color}`}
                />

                <div className="p-6 sm:p-7">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-3xl text-white transition duration-300 group-hover:scale-110`}
                  >

                    {feature.icon}

                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold">

                    {feature.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {feature.description}

                  </p>

                  <button className="mt-6 font-semibold text-blue-600 transition group-hover:translate-x-1">

                    Explore →

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>{/* INTERVIEW JOURNEY */}

        <div className="mt-12 rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg">

          <div className="text-center">

            <h2 className="text-2xl sm:text-3xl font-bold">
              🚀 Your Interview Journey
            </h2>

            <p className="mt-3 text-gray-500">
              Follow these simple steps to become placement ready.
            </p>

          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {[
              {
                emoji: "📚",
                title: "Learn",
                desc: "Understand concepts and fundamentals.",
                color: "bg-blue-100",
              },
              {
                emoji: "💻",
                title: "Practice",
                desc: "Solve coding and aptitude questions.",
                color: "bg-green-100",
              },
              {
                emoji: "🎤",
                title: "Interview",
                desc: "Practice AI mock interviews.",
                color: "bg-purple-100",
              },
              {
                emoji: "📄",
                title: "Resume",
                desc: "Improve ATS score and resume quality.",
                color: "bg-yellow-100",
              },
              {
                emoji: "🏆",
                title: "Get Hired",
                desc: "Land your dream job confidently.",
                color: "bg-pink-100",
              },
            ].map((step) => (

              <div
                key={step.title}
                className="rounded-2xl border bg-gray-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-lg"
              >

                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl ${step.color}`}
                >
                  {step.emoji}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* DAILY MOTIVATION */}

        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-xl">

          <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 lg:p-10">

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-white text-sm">

                🔥 Daily Motivation

              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-white">

                Success doesn't come from
                what you do occasionally.

                <br />
                <br />

                It comes from what you do
                consistently.

              </h2>

              <p className="mt-6 text-base sm:text-lg leading-8 text-purple-100">

                Every coding problem solved,
                every mock interview completed,
                every aptitude test attempted
                and every resume improvement
                takes you one step closer to your
                dream company.

              </p>

            </div>

            <div className="hidden lg:flex justify-center">

              <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">

                <div className="text-7xl text-center">
                  🚀
                </div>

                <h3 className="mt-6 text-center text-2xl font-bold text-white">

                  Keep Learning

                </h3>

                <p className="mt-4 text-center leading-7 text-purple-100">

                  Small improvements every day
                  create extraordinary results.

                </p>

              </div>

            </div>

          </div>

        </div>{/* QUICK START */}

        <div className="mt-12">

          <div className="text-center">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">

              ⚡ Quick Start

            </h2>

            <p className="mt-3 text-gray-500">

              Jump directly into your interview preparation.

            </p>

          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">

            <button
              onClick={() => navigate("/coding")}
              className="group rounded-3xl bg-blue-600 p-6 text-white shadow-lg transition hover:-translate-y-2 hover:bg-blue-700"
            >

              <FaCode className="mx-auto text-5xl transition group-hover:scale-110" />

              <h3 className="mt-5 text-lg sm:text-xl font-bold">

                Coding Practice

              </h3>

              <p className="mt-2 text-blue-100 text-sm">

                Practice DSA problems.

              </p>

            </button>

            <button
              onClick={() => navigate("/resume")}
              className="group rounded-3xl bg-green-600 p-6 text-white shadow-lg transition hover:-translate-y-2 hover:bg-green-700"
            >

              <FaFileAlt className="mx-auto text-5xl transition group-hover:scale-110" />

              <h3 className="mt-5 text-lg sm:text-xl font-bold">

                Resume Analyzer

              </h3>

              <p className="mt-2 text-green-100 text-sm">

                Improve ATS score.

              </p>

            </button>

            <button
              onClick={() => navigate("/companies")}
              className="group rounded-3xl bg-yellow-500 p-6 text-white shadow-lg transition hover:-translate-y-2 hover:bg-yellow-600"
            >

              <FaBuilding className="mx-auto text-5xl transition group-hover:scale-110" />

              <h3 className="mt-5 text-lg sm:text-xl font-bold">

                Companies

              </h3>

              <p className="mt-2 text-yellow-100 text-sm">

                Company-wise preparation.

              </p>

            </button>

            <button
              onClick={() => navigate("/profile")}
              className="group rounded-3xl bg-purple-600 p-6 text-white shadow-lg transition hover:-translate-y-2 hover:bg-purple-700"
            >

              <FaUserGraduate className="mx-auto text-5xl transition group-hover:scale-110" />

              <h3 className="mt-5 text-lg sm:text-xl font-bold">

                My Profile

              </h3>

              <p className="mt-2 text-purple-100 text-sm">

                Track your progress.

              </p>

            </button>

          </div>

        </div>

        {/* WHY CHOOSE INTERVIEWX */}

        <div className="mt-12 rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg">

          <div className="text-center">

            <h2 className="text-2xl sm:text-3xl font-bold">

              🌟 Why Choose InterviewX?

            </h2>

            <p className="mt-3 text-gray-500">

              Everything you need in one platform.

            </p>

          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <div className="text-2xl">💻</div>

                <div>

                  <h3 className="font-bold">

                    Coding Practice

                  </h3>

                  <p className="text-gray-600">

                    Topic-wise DSA questions with progress tracking.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="text-2xl">🤖</div>

                <div>

                  <h3 className="font-bold">

                    AI Mock Interviews

                  </h3>

                  <p className="text-gray-600">

                    Practice realistic technical interviews.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="text-2xl">📄</div>

                <div>

                  <h3 className="font-bold">

                    Resume Analysis

                  </h3>

                  <p className="text-gray-600">

                    ATS score and personalized AI suggestions.

                  </p>

                </div>

              </div>

            </div>

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <div className="text-2xl">🏢</div>

                <div>

                  <h3 className="font-bold">

                    Company Preparation

                  </h3>

                  <p className="text-gray-600">

                    Prepare for top companies with curated questions.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="text-2xl">📊</div>

                <div>

                  <h3 className="font-bold">

                    Progress Tracking

                  </h3>

                  <p className="text-gray-600">

                    Monitor your interview preparation journey.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="text-2xl">🎯</div>

                <div>

                  <h3 className="font-bold">

                    Placement Ready

                  </h3>

                  <p className="text-gray-600">

                    One platform to prepare for your dream job.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>{/* QUOTE */}

        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800 via-slate-900 to-black shadow-xl">

          <div className="px-6 py-10 sm:px-10 sm:py-14 text-center text-white">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-5xl">

              💡

            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold">

              Quote of the Day

            </h2>

            <p className="mt-8 text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-gray-200">

              "Dream Big.
              <br />
              Practice Daily.
              <br />
              Crack Interviews."

            </p>

            <p className="mt-8 text-gray-400 text-lg">

              — Team InterviewX

            </p>

          </div>

        </div>

        {/* FOOTER */}

        <footer className="mt-12 rounded-3xl bg-white shadow-lg">

          <div className="grid gap-10 p-8 md:grid-cols-3">

            {/* Brand */}

            

            


          </div>

          <div className="border-t px-6 py-6 text-center text-gray-500">

            <p>

              © 2026 <span className="font-semibold text-blue-600">InterviewX</span>.
              All Rights Reserved.

            </p>

            <p className="mt-2 text-sm">

              Practice • Prepare • Achieve 

            </p>

          </div>

        </footer>

      </div>

    </div>

  );

}