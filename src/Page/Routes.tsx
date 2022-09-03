import { Route, Routes } from "react-router-dom";
import Invoices from "./Invoices";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/invoices" element={<Invoices />} />
      <Route index element={<Home />} />
    </Routes>
  );
}

