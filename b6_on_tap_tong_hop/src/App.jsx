import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AppRoutes from "./router/router";

function App() {
  return (
    <>
      <h1>Buoi 6 - On tap tong hop</h1>
      <HeaderComponent></HeaderComponent>
      {/* O giua thanh phan thay doi  */}
      <AppRoutes />
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
