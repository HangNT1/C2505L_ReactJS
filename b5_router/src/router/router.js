// Cau hinh SPA:
// Neu bam vao About => Noi dung o giua la About
import { Routes, Route } from "react-router-dom";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ProfilePage from "../page/ProfilePage";
import NotFoundPage from "../page/NotFoundPage";
export default function AppRoutes() {
  return (
    // <Routes
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      {/* Nhap duong dan link tinh  */}
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
