import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import SystemsPage, { loader as systemsLoader } from "./pages/systems/systems-page";
import SystemPage, { loader as systemLoader } from "./pages/system/system-page";
import RootLayout from "./layout/root-layout";
import ResultsPage, { loader as resultsLoader } from "./pages/results/results-page";
import ComparisonPage from "./pages/comparison/comparison";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <h1>There was an error in Home!</h1>
      },
      {
        path: "systems",
        element: <SystemsPage />,
        loader: systemsLoader,
        errorElement: <h1>There was an error in Systems!</h1>
      },
      {
        path: "systems/:uuid",
        element: <SystemPage />,
        loader: systemLoader,
        errorElement: <h1>There was an error in System!</h1>
      },
      {
        path: "comparison",
        element: <ComparisonPage />,
        errorElement: <h1>There was an error in Comparison!</h1>
      },
      {
        path: "results/:uuid",
        element: <ResultsPage />,
        loader: resultsLoader,
        errorElement: <h1>There was an error in Results!</h1>
      },
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
