import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import DashboardLayout from "./routes/DashboardLayout";
import HomePage from "./routes/HomePage";
import FormsContextProvider from "./contexts/FormsContext";
// import InputsContextProvider from "./contexts/InputsContext";
import Canvas from "./components/Canvas";
// import OtpContextProvider from "./contexts/OtpContext";
import {
  canvasLoader,
  dashboardLoader,
  homePageLoader,
} from "./loaders/loaders";
import {
  signUpFormAction,
  verifyEmailFormAction,
  loginFormAction,
  resetPasswordFormAction,
  verifyPasswordResetFormAction,
  newPasswordFormAction,
  createClassAction,
  joinClassAction,
  signoutAction,
} from "./actions/actions";
import "./index.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import VerifyEmailOTPForm from "./components/VerifyEmailForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import VerifyPasswordResetOTPForm from "./components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "./components/NewPasswordForm";
import CreateClassForm from "./components/CreateClassForm";
import JoinClassForm from "./components/JoinClassForm";


const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: homePageLoader,
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
    ],
  },
  {
    path: "dashboard",
    id: "dashboard",
    element: <DashboardLayout />,
    loader: dashboardLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create-class",
        element: <CreateClassForm />,
        action: createClassAction,
      },
      {
        path: "join-class",
        element: <JoinClassForm />,
        action: joinClassAction,
      },
      {
        path: "signout",
        action: signoutAction,
      },
    ],
  },
  {
    path: "canvas/:id",
    id: "canvas",
    element: <Canvas />,
    errorElement: <ErrorPage />,
    loader: canvasLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RoomContextProvider> */}
    <FormsContextProvider>
      {/* <OtpContextProvider> */}
      {/* <InputsContextProvider> */}
      <RouterProvider
        router={router}
        fallbackElement={
          <p className="flex h-screen w-screen items-center justify-center">
            Loading...
          </p>
        }
      />
      {/* </InputsContextProvider> */}
      {/* </OtpContextProvider> */}
    </FormsContextProvider>
    {/* </RoomContextProvider> */}
  </React.StrictMode>,
);
