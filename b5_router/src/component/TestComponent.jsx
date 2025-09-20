import React, { useState } from "react";
import SinhVienComponent from "./SinhVienComponent";

function TestComponent() {
  const [mess, setMess] = useState("Test - component Cha & Con");
  return (
    <>
      {/*
         Truyen 1 gia tu thang cha sang thang con: 
            Cha => 
     */}
      <div>TestComponent</div>

      <p>Cha hien thi: {mess}</p>
      <SinhVienComponent a={mess}></SinhVienComponent>
    </>
  );
}

export default TestComponent;
