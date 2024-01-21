import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import VerifyEmailOTPForm from "./components/VerifyEmailOTPForm";
import DashboardLayout from "./routes/DashboardLayout";
import DashboardIndex from "./routes/DashboardIndex";
import VerifyPasswordResetOTPForm from "./components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "./components/NewPasswordForm";
import HomePage from "./routes/HomePage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUpForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "verify-email",
    element: <VerifyEmailOTPForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "reset-password",
    element: <ResetPasswordForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "verify-password-reset",
    element: <VerifyPasswordResetOTPForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "new-password",
    element: <NewPasswordForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndex />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
