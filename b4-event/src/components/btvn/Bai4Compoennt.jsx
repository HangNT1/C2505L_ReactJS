import React, { useState } from "react";

function Bai4Comoennt() {
  const [so, setSo] = useState(0);
  const [mess, setMess] = useState("");
  function tang() {
    if (so < 10) {
      setSo(so + 1);
    } else {
      //   alert("vuot qua gioi han");
      setMess("vuot qua gioi han");
    }
  }

  function giam() {
    if (so < 10) {
      setSo(so + 1);
    } else {
      //   alert("vuot qua gioi han");
      setMess("vuot qua gioi han");
    }
  }
  function reset() {
    setSo(0);
  }
  return (
    <>
      <p>
        so la:{so} - {mess}
      </p>
      <button onClick={tang}>tang</button>
      <button onClick={giam}>giam</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Bai4Comoennt;
