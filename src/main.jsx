import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./Context/userContext.jsx";
import { EventsProvider } from "./Context/eventsContext";

import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard.jsx";
import Help from "./Components/Help.jsx";
import Registration from "./Components/Registration.jsx";
import NewEvent from "./Components/NewEvent.jsx";

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
    path: "/newEvent",
    element: <NewEvent />,
  },

  {
    path: "/help",
    element: <Help />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <EventsProvider>
        <RouterProvider router={router} />
      </EventsProvider>
    </UserProvider>
  </StrictMode>
);

//Alot of the code I resused from task 10
