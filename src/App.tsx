import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import SystemsPage from "./pages/systems/systems-page";
import SystemPage from "./pages/system/system-page";
import Root from "./components/root";
import ResultsPage from "./pages/results/results-page";
import Comparison from "./pages/comparison/comparison";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <Comparison />,
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
