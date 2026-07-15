import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";

import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import ProfilePage from "../pages/profile/ProfilePage";
import ResumePage from "../pages/resume/ResumePage";

import CompaniesPage from "../pages/company/CompaniesPage";
import CompanyDetailsPage from "../pages/company/CompanyDetailsPage";

import ProtectedRoute from "./ProtectedRoute";
import { CompanyProvider } from "../context/CompanyContext";

import CodingPracticePage from "../pages/coding/CodingPracticePage";

import InterviewSetupPage from "../pages/interview/InterviewSetupPage";
import InterviewSessionPage from "../pages/interview/InterviewSessionPage";
import InterviewResultPage from "../pages/interview/InterviewResultPage";
import TermsPage from "../pages/legal/TermsPage";
import PrivacyPage from "../pages/legal/PrivacyPage";

export default function AppRoutes() {
  return (
    <CompanyProvider>
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/admin" element={<AdminDashboard />} />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOtpPage />}
      />

      <Route
        path="/reset-password"
        element={<ResetPasswordPage />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume"
        element={
          <ProtectedRoute>
            <ResumePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/companies"
        element={
          <ProtectedRoute>
            <CompaniesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/companies/details"
        element={
          <ProtectedRoute>
            <CompanyDetailsPage />
          </ProtectedRoute>
        }
      />

      <Route
    path="/coding"
    element={<CodingPracticePage />}
/>

        <Route
    path="/interview"
    element={<InterviewSetupPage />}
/>

<Route
    path="/interview/session"
    element={<InterviewSessionPage />}
/>

<Route
    path="/interview/result/:sessionId"
    element={<InterviewResultPage />}
/>

;<Route
  path="/terms"
  element={<TermsPage />}
/>

<Route
  path="/privacy"
  element={<PrivacyPage />}
/>
    </Routes>
  </BrowserRouter>
</CompanyProvider>
  );
}