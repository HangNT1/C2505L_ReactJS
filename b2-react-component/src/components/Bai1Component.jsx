import { useState } from "react";

function Bai1Component() {
  const [name, setName] = useState("Nguyen Van A");
  const clickMe = () => {
    if (name === "Nguyen Van A") {
      setName("Nguyen Van B");
    } else {
      setName("Nguyen Van A");
    }
  };
  return (
    <>
      <h1>Ten cua ban :{name}</h1>
      <button onClick={clickMe}>Click me</button>
    </>
  );
}
export default Bai1Component;
