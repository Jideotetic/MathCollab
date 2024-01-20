import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import OTPForm from "./components/OTPForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import ConfirmPasswordResetForm from "./components/ConfirmPasswordResetForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "verify-otp",
    element: <OTPForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "reset-password",
    element: <ResetPasswordForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "confirm-reset",
    element: <ConfirmPasswordResetForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <h1 className="text-4xl">MathCollab Coming Soon</h1>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
