import React, { useRef, useState } from "react";

function CalculateComponent() {
  const soThuNhat = useRef();
  const soThuHai = useRef();
  const [result, setResult] = useState(0);
  const tinhTong = () => {
    // B1: Lay gia tri tu o input =>
    const numberFirst = soThuNhat.current.value;
    const numberSecond = soThuHai.current.value;
    // Tinh toan
    setResult(Number.parseFloat(numberFirst) + Number.parseFloat(numberSecond));
  };
  const tinhHieu = () => {
    // B1: Lay gia tri tu o input =>
    const numberFirst = soThuNhat.current.value;
    const numberSecond = soThuHai.current.value;
    // Tinh toan
    setResult(Number.parseFloat(numberFirst) - Number.parseFloat(numberSecond));
  };
  const tinhTich = () => {
    // B1: Lay gia tri tu o input =>
    const numberFirst = soThuNhat.current.value;
    const numberSecond = soThuHai.current.value;
    // Tinh toan
    setResult(Number.parseFloat(numberFirst) * Number.parseFloat(numberSecond));
  };
  const tinhThuong = () => {
    // B1: Lay gia tri tu o input =>
    const numberFirst = soThuNhat.current.value;
    const numberSecond = soThuHai.current.value;
    // if else neu can
    // Tinh toan
    setResult(Number.parseFloat(numberFirst) / Number.parseFloat(numberSecond));
  };
  return (
    <>
      <h1>tinh toan</h1>
      Number 1: <input type="text" ref={soThuNhat} /> <br />
      <br />
      Number 2: <input type="text" ref={soThuHai} />
      <br />
      <br />
      <button style={{ marginRight: "30px" }} onClick={tinhTong}>
        cong
      </button>
      <button style={{ marginRight: "30px" }} onClick={tinhHieu}>
        tru
      </button>
      <button style={{ marginRight: "30px" }} onClick={tinhTich}>
        nhan
      </button>
      <button style={{ marginRight: "30px" }} onClick={tinhThuong}>
        chia
      </button>
      <br />
      <br />
      <p>Ket qua: {result}</p>
    </>
  );
}

export default CalculateComponent;
