import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Dashboard from "./routes/Dashboard";
import HomePage from "./routes/HomePage";
import FormsContextProvider from "./contexts/FormsContext";
import Canvas from "./routes/Canvas";
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
  startClassAction,
  canvasAction,
} from "./actions/actions";
import "./index.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import VerifyEmailOTPForm from "./components/VerifyEmailForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import VerifyPasswordResetOTPForm from "./components/VerifyPasswordResetOTPForm";
import NewPasswordForm from "./components/NewPasswordForm";
import CreateClassForm from "./components/CreateClassForm";
import GlobalSpinner from "./components/GlobalSpinner";

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
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create-class",
        element: <CreateClassForm />,
        action: createClassAction,
      },
      {
        path: "start-class",
        action: startClassAction,
        loader: async () => {
          return redirect("/dashboard");
        },
      },
      {
        path: "join-class",
        action: joinClassAction,
        loader: async () => {
          return redirect("/dashboard");
        },
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
    action: canvasAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormsContextProvider>
      <RouterProvider router={router} fallbackElement={<GlobalSpinner />} />
    </FormsContextProvider>
  </StrictMode>,
);
