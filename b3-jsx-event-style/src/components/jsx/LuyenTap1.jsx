//  {/*
//         1. Tao 1 doi tuong MayTinh gom cac thuoc tinh: ma - String, ten - String, dongMay - String, gia - Number, ngaySanXuat - date.
//         Hien thi thong tin cua doi tuong May Tinh len giao dien. Ngoai ra cac thong tin cua doi tuong deu co size la 30px, mau xanh va hien thi o giua man hinh
//         2. Tao 1 mang so nguyen gom 5 phan tu fix cung. Hien thi lan luot gia tri cua cac phan tu trong mang khong dung vong lap
//        */}
import React from "react";

export default function LuyenTap1() {
  const mayTinh = {
    ma: "MT01",
    ten: "May tinh 1",
    dongMay: "Win",
    gia: 1000000,
    ngaySanXuat: "01/01/2025",
  };
  const styleMayTinh = {
    color: "blue",
    fontSize: "30px",
    textAlign: "center",
  };
  const mangSoNguyen = [1, 2, 5, 34, 56];

  return (
    <>
      <h1>Luyen tap bai 1</h1>
      <h1>Thong tin may tinh:</h1>
      <div style={styleMayTinh}>
        <p>Ma:{mayTinh.ma}</p>
        <p>Ten may tinh:{mayTinh.ten}</p>
        <p>Dong may:{mayTinh.dongMay}</p>
        <p>Gia:{mayTinh.gia}</p>
        <p>Ngay San Xuat:{mayTinh.ngaySanXuat}</p>
      </div>
      <h1>Bai 2</h1>
      <p>Phan tu la:{mangSoNguyen[0]}</p>
      <p>Phan tu :{mangSoNguyen[1]}</p>
      <p>Phan tu :{mangSoNguyen[2]}</p>
      <p>Phan tu :{mangSoNguyen[3]}</p>
      <p>Phan tu:{mangSoNguyen[4]}</p>
    </>
  );
}
