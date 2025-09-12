//  {/*
//   1. Tao 1 chuong react de dem bien count.
//   Tao 2 button: Tang va Giam:
//      Neu gia tri cua bien count trong khoang -10 <=count < 20 thi chuong hoat dong
//      Neu khong thi hien thi message ngay canh bien count : Gia tri vuot qua min/max cho phep
//   2. Tao 1 chuong React. Hien thi gia tri cua P,S cua hinh chu nhat khi biet gia tri cua 2 canh (fix cung)
//   3. Tao 1 chuong trinh React. Nhap vao ten va o duoi hien thi ra ten vua nhap tu o input
//   4. Tao 1 chuong nhap react dung de chuyen nhiet do tu C => F.
//   Co 1 input: nhap gia tri cua bien nhiet do C.
//   Bam vao 1 button Chuyen nhiet
//   5. Lam bai 3->6 trong BTVN Buổi 1
//    */}

import { useState } from "react";

function Bai1Component() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      setError("Quá giới hạn cho phép");
    }
  };
  const decrease = () => {
    if (count > -10) {
      setCount(count - 1);
    } else {
      setError("Quá giới hạn cho phép");
    }
  };
  return (
    <>
      <h1>Bai 1</h1>
      <p>Gia tri cua bien: {count}</p>
      <p>{error}</p>
      <button onClick={increaseCount}>Tang</button>
      <button onClick={decrease}>Giam</button>
    </>
  );
}
export default Bai1Component;
