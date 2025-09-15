import React, { useState } from "react";

function Bai3Component() {
  const [name, setName] = useState("Nguoi dung");
  function clickMe() {
    if (name === "Nguoi dung") {
      setName("React Fan");
    } else {
      setName("Nguoi dung");
    }
  }
  return (
    <>
      <h1>Bai3Component</h1>
      <p>{name}</p>
      <button onClick={clickMe}> Doi ten</button>
    </>
  );
}

export default Bai3Component;
