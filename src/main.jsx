import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/ui/Navbar/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home/Home.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
