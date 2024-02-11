import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import DashboardLayout from "./routes/DashboardLayout";
import DashboardIndex from "./routes/DashboardIndex";
import HomePage from "./routes/HomePage";
import FormsContextProvider from "./contexts/FormsContext";
import InputsContextProvider from "./contexts/InputsContext";
// import ClassListContextProvider from "./contexts/ClassListContext";
import Canvas from "./components/Canvas";
import AuthProvider from "./contexts/AuthContext";
import HomePageIndex from "./routes/HomePageIndex";
import ExplorePage from "./routes/ExplorePage";
import OtpContextProvider from "./contexts/OtpContext";
import Classes from "./routes/Classes";
import { classesLoader, classLoader } from "./loaders/loaders";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePageIndex /> },
      { path: "classes", element: <ExplorePage />, loader: classesLoader },
      { path: "classes/:class", element: <Classes />, loader: classLoader },
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
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "canvas",
    element: <Canvas />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <FormsContextProvider>
        <OtpContextProvider>
          {/* <ClassListContextProvider> */}
          <InputsContextProvider>
            <RouterProvider router={router} />
          </InputsContextProvider>
          {/* </ClassListContextProvider> */}
        </OtpContextProvider>
      </FormsContextProvider>
    </AuthProvider>
  </React.StrictMode>,
);
