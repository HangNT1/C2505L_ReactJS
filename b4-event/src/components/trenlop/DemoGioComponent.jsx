import React, { useEffect, useState } from "react";

function DemoGioComponent() {
  // luu tru s
  const [second, setSecond] = useState(0);
  // trang thai cua dong ho bam s
  const [isRun, setIsRun] = useState(false);
  useEffect(() => {
    // dem s
    let interval;
    if (isRun) {
      interval = setInterval(function () {
        setSecond((p) => p + 1);
      }, 1000);
    }
    // Muon time setTimeout
    return () => {
      clearInterval(interval);
    };
  }, [isRun]);
  const startTime = () => {
    setIsRun(true);
  };
  const pauseTime = () => {
    setIsRun(false);
  };
  const resetTime = () => {
    setIsRun(false);
    setSecond(0);
  };
  return (
    <>
      <h1>Dem gio</h1>
      <h1>Timer: {second}</h1>
      <button onClick={startTime}>Start</button>
      <button onClick={pauseTime}>Pause</button>
      <button onClick={resetTime}>Reset</button>
    </>
  );
}

export default DemoGioComponent;
