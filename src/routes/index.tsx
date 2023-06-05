import { createBrowserRouter } from "react-router-dom";
import App from '../components/App/App.tsx'
import ErrorPage from "../components/ErrorPage/ErrorPage.tsx";
import Home from "../components/Home/Home.tsx";

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
    ]
  }
])
