import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "next-themes";

import { CodingProvider } from "./context/CodingContext";
import { InterviewProvider } from "./context/InterviewContext";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      >
        <InterviewProvider>
          <CodingProvider>
            <App />
          </CodingProvider>
        </InterviewProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  </StrictMode>
);