import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import SystemsPage, { loader as systemsLoader } from "./pages/systems/systems-page";
import SystemPage, { loader as systemLoader } from "./pages/system/system-page";
import RootLayout from "./layout/root-layout";
import ResultsPage, { loader as resultsLoader } from "./pages/results/results-page";
import ComparisonPage from "./pages/comparison/comparison";
import ErrorComponent from "./components/error";
import PageNotFound from "./components/page-not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: "system",
        element: <SystemsPage />,
        loader: systemsLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: "system/:uuid",
        element: <SystemPage />,
        loader: systemLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: "comparison",
        element: <ComparisonPage />,
        errorElement: <ErrorComponent />
      },
      {
        path: "results/:uuid",
        element: <ResultsPage />,
        loader: resultsLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
