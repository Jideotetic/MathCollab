import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Dashboard from "./routes/Dashboard";
import HomePage from "./routes/HomePage";
import FormsContextProvider from "./contexts/FormsContext";
import Canvas from "./routes/Canvas";
import LoginForm from "./components/forms/LoginForm";
import SignUpForm from "./components/forms/SignUpForm";
import VerifyEmailOTPForm from "./components/forms/VerifyEmailForm";
import ResetPasswordForm from "./components/forms/ResetPasswordForm";
import VerifyPasswordResetOTPForm from "./components/forms/VerifyPasswordResetOTPForm";
import NewPasswordForm from "./components/forms/NewPasswordForm";
import CreateClassForm from "./components/forms/CreateClassForm";
import GlobalSpinner from "./components/GlobalSpinner";
import startClassAction from "./actions/startClassAction";
import signUpFormAction from "./actions/signUpFormAction";
import verifyEmailFormAction from "./actions/verifyEmailFormAction";
import loginFormAction from "./actions/loginFormAction";
import resetPasswordFormAction from "./actions/resetPasswordFormAction";
import verifyPasswordResetFormAction from "./actions/verifyPasswordResetFormAction";
import newPasswordFormAction from "./actions/newPasswordFormAction";
import signoutAction from "./actions/signoutAction";
import createClassAction from "./actions/createClassAction";
import joinClassAction from "./actions/joinClassAction";
import homePageLoader from "./loaders/homePageLoader";
import dashboardLoader from "./loaders/dashboardLoader";
import likeButtonAction from "./actions/likeButtonAction";
import canvasLoader from "./loaders/canvasLoader";
import registerAction from "./actions/registerAction";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    id: "homepage",
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
    element: <Dashboard />,
    loader: dashboardLoader,
    action: likeButtonAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create-class",
        element: <CreateClassForm />,
        action: createClassAction,
      },
      {
        path: "register",
        action: registerAction,
      },
      {
        path: "start-class",
        action: startClassAction,
      },
      {
        path: "join-class",
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
  <StrictMode>
    <FormsContextProvider>
      <RouterProvider router={router} fallbackElement={<GlobalSpinner />} />,
    </FormsContextProvider>
  </StrictMode>,
);
