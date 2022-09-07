import { Route, Routes } from "react-router-dom";
import Invoices from "./Invoices";
import InvoicesPaid from "./InvoicesPaid";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoices/paid" element={<InvoicesPaid />} />
      <Route index element={<Home />} />
    </Routes>
  );
}

