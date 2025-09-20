import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./component/TestComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import AppRoutes from "./router/router";

function App() {
  return (
    <>
      {/* 
        Cha: App.jsx
        Con: TestComponent
      */}
      {/* <h1>Buoi 5 - Router</h1>
      <TestComponent></TestComponent> */}
      <HeaderComponent></HeaderComponent>
      {/* Noi dung body */}
      {/* Truyen router o giua */}
      <AppRoutes />
      <FooterComponent />
    </>
  );
}

export default App;
