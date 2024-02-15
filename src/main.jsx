import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home/Home.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy/>
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main">
      {/* <App /> */}
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);
