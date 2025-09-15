import logo from "./logo.svg";
import "./App.css";
import Bai3Component from "./components/btvn/Bai3Component";
import Bai4Compoennt from "./components/btvn/Bai4Compoennt";
import Bai5Component from "./components/btvn/Bai5Component";
import EventComponent from "./components/trenlop/EventComponent";
import Event1Component from "./components/trenlop/Event1Component";
import CalculateComponent from "./components/trenlop/CalculateComponent";
import DemoGioComponent from "./components/trenlop/DemoGioComponent";

function App() {
  return (
    <>
      <Bai3Component></Bai3Component>
      <Bai4Compoennt></Bai4Compoennt>
      <Bai5Component></Bai5Component>
      <EventComponent></EventComponent>
      <Event1Component></Event1Component>
      <CalculateComponent></CalculateComponent>
      <DemoGioComponent></DemoGioComponent>
    </>
  );
}

export default App;
