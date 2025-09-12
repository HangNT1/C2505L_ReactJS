import React from "react";

const mangNhanVien = [
  {
    ma: "NV01",
    ten: "Nguyen van A",
    tuoi: 10,
  },
  {
    ma: "NV02",
    ten: "Nguyen van B",
    tuoi: 11,
  },
  {
    ma: "NV03",
    ten: "Nguyen van C",
    tuoi: 15,
  },
];
function LoppComponent() {
  return (
    <>
      <h1>LoopComponent</h1>
      {/* Tao 1 mang doi tuong NhanVien gom cac thuoc tinh:
      ma - String, ten - String, tuoi - number.
      Hien thi danh sach doi tuong Nhan vien len: 
      1. Len table 
      2. Len combobox 
      3. Len ul, li 
       */}
      <h1>Danh sach duoi dang table</h1>
      <table>
        <thead>
          <tr>
            <th>Ma</th>
            <th>Ten</th>
            <th>Tuoi</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <h1>Danh sach duoi dang combobox</h1>
      <h1>Danh sach duoi dang ul,li</h1>
    </>
  );
}

export default LoppComponent;
