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
// Goi y lam bai 3,4: onChange & useState / C2:useRef
export default function Bai2Component() {
  const chieuDai = 10;
  const chieuRong = 5;
  const chuVi = (chieuDai + chieuRong) * 2;
  const dienTich = chieuDai * chieuRong;
  return (
    <>
      <h1>Bai 2</h1>
      <p>Chu vi :{chuVi} </p>
      <p>Dien Tich :{dienTich}</p>
    </>
  );
}
