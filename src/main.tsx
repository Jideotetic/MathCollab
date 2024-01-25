import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import DashboardLayout from "./routes/DashboardLayout";
import DashboardIndex from "./routes/DashboardIndex";
import HomePage from "./routes/HomePage";
import FormBooleanValueContextProvider from "./contexts/FormBooleansValueContext";
import InputValueContextProvider from "./contexts/InputValueContext";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    <FormBooleanValueContextProvider>
      <InputValueContextProvider>
        <RouterProvider router={router} />
      </InputValueContextProvider>
    </FormBooleanValueContextProvider>
  </React.StrictMode>,
);
