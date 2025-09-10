// export default function FunctionComponent() {
//   // Tra ra HTML
//   return (
//     <>
//       <h1>Day la function component</h1>
//     </>
//   );
// }
// export default FunctionComponent;
// ES5, ES6 => arrow function (=>)
// function FunctionComponent(props) {
// }
// const FunctionComponent = (props)=>{
//     return (
//         <>
//         </>
//     )

import { useEffect, useState } from "react";
// Function Component => React Hook: useState, useEffect, useMemo...
// }
const FunctionComponent = () => {
  // init => contructor
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1.5);
  const [name, setName] = useState("");
  // lap rap & Updating & Unmount => useEffect
  // useEffect:
  // ths1: arrow function
  // ths 2: []: depenency
  useEffect(() => {
    console.log("Did mount: Chay 1 lan luc dau");
    // clean up: Unmounting
    return () => {
      console.log("Xoa khoi dom");
    };
  }, []);
  // Update
  useEffect(() => {
    console.log("Updating");
  }, [count]);

  //   const increaseNumber = ()=>{}
  function increaseNumber() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Day la function component</h1>
      <p>Count: {count}</p>
      <button onClick={increaseNumber}>Click me</button>
    </>
  );
};
export default FunctionComponent;
