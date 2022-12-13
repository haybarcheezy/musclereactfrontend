import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./dist/output.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Root from "../src/routes/root";
import Traps from "./routes/traps";
import Pecs from "./routes/pecs";
import Shoulders from "./routes/shoulders";
import Biceps from "./routes/biceps";
import Abdominals from "./routes/abdominals";
import Obliques from "./routes/obliques";
import Quadriceps from "./routes/quadriceps";
import Hamstrings from "./routes/hamstrings";
import Calves from "./routes/calves";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/traps",
    element: <Traps />,
  },
  {
    path: "/pecs",
    element: <Pecs />,
  },
  {
    path: "/shoulders",
    element: <Shoulders />,
  },
  {
    path: "/biceps",
    element: <Biceps />,
  },
  {
    path: "/abdominals",
    element: <Abdominals />,
  },
  {
    path: "/obliques",
    element: <Obliques />,
  },
  {
    path: "/quadriceps",
    element: <Quadriceps />,
  },
  {
    path: "/hamstrings",
    element: <Hamstrings />,
  },
  {
    path: "/calves",
    element: <Calves />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
