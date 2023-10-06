import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import TablePage from "./pages/datatable/TablePage";
import EmailPage from "./pages/email/EmailPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "dashboard",
    element: <App />,
    children: [
      {
        path: "",
        element: <TablePage />,
      },
      {
        path: "email",
        element: <EmailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
