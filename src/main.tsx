import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import DashboardLayout from "./routes/DashboardLayout";
import DashboardIndex from "./routes/DashboardIndex";
import HomePage from "./routes/HomePage";
import FormsContextProvider from "./contexts/FormsContext";
import InputsContextProvider from "./contexts/InputsContext";
import Canvas from "./components/Canvas";
import AuthProvider from "./contexts/AuthContext";
// import HomePageIndex from "./routes/HomePageIndex";
// import ExplorePage from "./routes/ExplorePage";
import OtpContextProvider from "./contexts/OtpContext";
// import Classes from "./routes/Classes";
import DashboardClasses from "./routes/DashboardClasses";
import { classesLoader, classLoader } from "./loaders/loaders";
import {
  signUpFormAction,
  verifyEmailFormAction,
  loginFormAction,
  resetPasswordFormAction,
  verifyPasswordResetFormAction,
  newPasswordFormAction,
} from "./actions/actions";
import "./index.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import VerifyEmailOTPForm from "./components/VerifyEmailForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import VerifyPasswordResetOTPForm from "./components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "./components/NewPasswordForm";
// import { temp } from "./contexts/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <HomePage />,
    // loader() {
    //   return { email: temp.email, otpValue: temp.otpValue };
    // },
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUpForm />,
        action: signUpFormAction,
      },
      {
        path: "verify-email",
        element: <VerifyEmailOTPForm />,
        action: verifyEmailFormAction,
      },
      {
        path: "login",
        element: <LoginForm />,
        action: loginFormAction,
      },
      {
        path: "reset-password",
        element: <ResetPasswordForm />,
        action: resetPasswordFormAction,
      },
      {
        path: "verify-password-reset",
        element: <VerifyPasswordResetOTPForm />,
        action: verifyPasswordResetFormAction,
      },
      {
        path: "new-password",
        element: <NewPasswordForm />,
        action: newPasswordFormAction,
      },

      // { path: "classes", element: <ExplorePage />, loader: classesLoader },
      // { path: "classes/:class", element: <Classes />, loader: classLoader },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardIndex />,
        loader: classesLoader,
      },
      { path: ":class", element: <DashboardClasses />, loader: classLoader },
    ],
  },
  {
    path: "canvas/:classId",
    element: <Canvas />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <FormsContextProvider>
        <OtpContextProvider>
          <InputsContextProvider>
            <RouterProvider router={router} />
          </InputsContextProvider>
        </OtpContextProvider>
      </FormsContextProvider>
    </AuthProvider>
  </React.StrictMode>,
);
