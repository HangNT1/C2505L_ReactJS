import "./App.css";
import Bai1Component from "./components/Bai1Component";
import Bai2Component from "./components/Bai2Component";
import Bai3Component from "./components/Bai3Component";
import ClassComponenet from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    // Co 2 component:
    // Class Component
    // Function Component
    // State & Props: Du lieu
    // State: Bien/Du lieu thay doi ngay ben trong component
    //   + class: this.state
    //   + function: useState
    // props: Bien/Du lieu thay doi tu component cha -> component con
    <>
      <h1>Buoi 2 - Component</h1>
      {/* <FunctionComponent></FunctionComponent> */}
      {/* <ClassComponenet></ClassComponenet> */}
      <Bai1Component></Bai1Component>
      <Bai2Component></Bai2Component>
      <Bai3Component></Bai3Component>
    </>
  );
}

export default App;
