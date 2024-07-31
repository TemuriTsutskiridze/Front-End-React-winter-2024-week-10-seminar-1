import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Invoices from "./pages/Invoices";
import InvoiceProvider from "./contexts/InvoiceContext";
import Invoice from "./pages/Invoice";
import InvoiceEdit from "./pages/InvoiceEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/invoices"} />,
  },
  {
    path: "/invoices",
    element: <Invoices />,
  },
  {
    path: "/invoices/:id",
    element: <Invoice />,
  },
  {
    path: "/invoices/:id/edit",
    element: <InvoiceEdit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InvoiceProvider>
      <RouterProvider router={router} />
    </InvoiceProvider>
  </React.StrictMode>
);
