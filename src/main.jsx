import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'

import Home from "./components/Home";
import Dashboard from "./Components/Dashboard.jsx";
import Help from "./Components/Help.jsx";
import Registration from "./components/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

    {
      path: "/registration",
      element: <Registration />,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
    },

    {
      path: "/help",
      element: <Help />,
    }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
