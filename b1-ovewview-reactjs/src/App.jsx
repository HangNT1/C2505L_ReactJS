import logo from "./logo.svg";
import "./App.css";
import HeaderComponenent from "./components/header/HeaderComponent";
import FootterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
// React JS: Library for building user interfaces
// JSX: Javascript xml
// VueJS:.vue Single File Components
// trong 1 file: Vua co code giao dien (html), lam dep(css), logic(js)
// ReactJS: Chi co giao dien (html) va logic (js)
// CSS: viet o file rieng, import vao file giao dien
function App() {
  return (
    // Tat ca component => deu phai o App.jsx
    <>
      <HeaderComponenent></HeaderComponenent>
      <MainComponent></MainComponent>
      <FootterComponent></FootterComponent>
    </>
  );
}

export default App;
