import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import SystemsPage from "./pages/systems/systems-page";
import SystemPage from "./pages/system/system-page";
import RootLayout from "./components/root-layout";
import ResultsPage from "./pages/results/results-page";
import ComparisonPage from "./pages/comparison/comparison";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "systems",
        element: <SystemsPage />,
      },
      {
        path: "systems/:uuid",
        element: <SystemPage />,
      },
      {
        path: "comparison",
        element: <ComparisonPage />,
      },
      {
        path: "results/:uuid",
        element: <ResultsPage />,
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
