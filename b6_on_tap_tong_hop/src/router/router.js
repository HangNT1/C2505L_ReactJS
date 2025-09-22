import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
// Liet ke cac duong dan va noi dung tuong ung cua cac duong dan
export default function AppRoutes() {
  return (
    /**
     * /home  => HomePage
     * /about => AboutPage
     * /profile => ProdilePage
     */
    <Routes>
      {/* 3 Route */}
      <Route path="/" element={<HomePage />}>
        {/* Duong dan: path
        Noi dung cua duong: element
        */}
      </Route>
      {/* "/profile/123" => Noi dung profile & 123 
      "/profile/456" => Noi dung profile & 456  */}
      <Route path="/home" element={<HomePage />}></Route>
      {/* C2: Gop thanh 1 mang: Phai dung vs BrowserRouter */}
      {/* <Route path={["/", "/home"]} element={<HomePage />}></Route> */}
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/profile/:name1" element={<ProfilePage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
