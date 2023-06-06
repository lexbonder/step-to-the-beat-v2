import { createBrowserRouter } from "react-router-dom";
import App from '../components/App/App.tsx'
import ErrorPage from "../components/ErrorPage/ErrorPage.tsx";
import Home from "../components/Home/Home.tsx";
import Calculations from "../components/Calculations/Calculations.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'calculations',
        element: <Calculations />
      }
    ]
  }
])
