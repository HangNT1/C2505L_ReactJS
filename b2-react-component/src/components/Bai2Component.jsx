import { useState } from "react";

function Bai2Component() {
  const [number, setNumber] = useState(0);
  function clickMe() {
    setNumber(number + 1);
  }
  return (
    <>
      <p>Count = {number}</p>
      <button onClick={clickMe}>Click me</button>
    </>
  );
}
export default Bai2Component;
