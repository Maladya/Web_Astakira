import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NoFooterLayout from "./layouts/NoFooterLayout";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Staff from "./pages/Staff.jsx";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <Routes>
      <Route element={<NoFooterLayout />}>
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/anggota" element={<Staff />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}