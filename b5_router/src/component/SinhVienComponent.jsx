import React from "react";

// function SinhVienComponent({ a }) {
//   return (
//     <>
//       <div>SinhVienComponent</div>
//       <h1>Con hien thi: {a}</h1>
//     </>
//   );
// }
function SinhVienComponent(props) {
  return (
    <>
      <div>SinhVienComponent</div>
      <h1>Con hien thi: {props.a}</h1>
    </>
  );
}
export default SinhVienComponent;
