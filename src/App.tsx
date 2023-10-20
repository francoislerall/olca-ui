import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './layout/root-layout'
import Home from './pages/home/home'
import SystemsPage from './pages/systems/systems-page'
import { loader as systemsLoader } from './pages/systems/systems-loader'
import ErrorComponent from './components/error'
import SystemPage from './pages/system/system-page'
import { loader as systemLoader } from './pages/system/system-loader'
import ComparisonPage from './pages/comparison/comparison'
import ResultsPage from './pages/results/results-page'
import { loader as resultsLoader } from './pages/results/results-loader'

import PageNotFound from './pages/not-found/page-not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'system',
        element: <SystemsPage />,
        loader: systemsLoader,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'system/:uuid',
        element: <SystemPage />,
        loader: systemLoader,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'comparison',
        element: <ComparisonPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'results/:uuid',
        element: <ResultsPage />,
        loader: resultsLoader,
        errorElement: <ErrorComponent />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
