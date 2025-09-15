import React, { useRef, useState } from "react";

function Event1Component() {
  const [message, setMessage] = useState("");
  // useRef =>co bn o input => co bang day bien useRef
  const inputRef = useRef();
  const changeData = () => {
    setMessage(inputRef.current.value);
  };
  return (
    <>
      <h1>Bai 2 tren lop - C2 </h1>
      <span>Message: </span>
      <input type="text" ref={inputRef} onChange={changeData} />
      <p>Value:{message} </p>
    </>
  );
}

export default Event1Component;
