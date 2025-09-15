import React, { useState } from "react";

function Bai5Component() {
  // B1: Khoi tao gia tri list ban dau
  // C1: Tao bt
  //   const sinhViens = [
  //     {
  //       mssv: "SV01",
  //       ten: "Nguyen Van A",
  //       tuoi: 10,
  //       diaChi: "Ha noi",
  //     },
  //     {
  //       mssv: "SV02",
  //       ten: "Nguyen Van A",
  //       tuoi: 10,
  //       diaChi: "Ha noi",
  //     },
  //     {
  //       mssv: "SV03",
  //       ten: "Nguyen Van A",
  //       tuoi: 10,
  //       diaChi: "Ha noi",
  //     },
  //     {
  //       mssv: "SV01",
  //       ten: "Nguyen Van A",
  //       tuoi: 10,
  //       diaChi: "Ha noi",
  //     },
  //   ];
  // C2: Mockapi
  const sinhViens = [
    {
      mssv: "mssv 1",
      ten: "ten 1",
      tuoi: 37,
      diaChi: "diaChi 1",
      id: "1",
    },
    {
      mssv: "mssv 2",
      ten: "ten 2",
      tuoi: 63,
      diaChi: "diaChi 2",
      id: "2",
    },
    {
      mssv: "mssv 3",
      ten: "ten 3",
      tuoi: 13,
      diaChi: "diaChi 3",
      id: "3",
    },
    {
      mssv: "mssv 4",
      ten: "ten 4",
      tuoi: 87,
      diaChi: "diaChi 4",
      id: "4",
    },
    {
      mssv: "mssv 5",
      ten: "ten 5",
      tuoi: 64,
      diaChi: "diaChi 5",
      id: "5",
    },
    {
      mssv: "mssv 6",
      ten: "ten 6",
      tuoi: 6,
      diaChi: "diaChi 6",
      id: "6",
    },
    {
      mssv: "mssv 7",
      ten: "ten 7",
      tuoi: 55,
      diaChi: "diaChi 7",
      id: "7",
    },
    {
      mssv: "mssv 8",
      ten: "ten 8",
      tuoi: 2,
      diaChi: "diaChi 8",
      id: "8",
    },
    {
      mssv: "mssv 9",
      ten: "ten 9",
      tuoi: 73,
      diaChi: "diaChi 9",
      id: "9",
    },
    {
      mssv: "mssv 10",
      ten: "ten 10",
      tuoi: 43,
      diaChi: "diaChi 10",
      id: "10",
    },
    {
      mssv: "mssv 11",
      ten: "ten 11",
      tuoi: 25,
      diaChi: "diaChi 11",
      id: "11",
    },
    {
      mssv: "mssv 12",
      ten: "ten 12",
      tuoi: 57,
      diaChi: "diaChi 12",
      id: "12",
    },
    {
      mssv: "mssv 13",
      ten: "ten 13",
      tuoi: 12,
      diaChi: "diaChi 13",
      id: "13",
    },
    {
      mssv: "mssv 14",
      ten: "ten 14",
      tuoi: 10,
      diaChi: "diaChi 14",
      id: "14",
    },
    {
      mssv: "mssv 15",
      ten: "ten 15",
      tuoi: 8,
      diaChi: "diaChi 15",
      id: "15",
    },
    {
      mssv: "mssv 16",
      ten: "ten 16",
      tuoi: 4,
      diaChi: "diaChi 16",
      id: "16",
    },
    {
      mssv: "mssv 17",
      ten: "ten 17",
      tuoi: 3,
      diaChi: "diaChi 17",
      id: "17",
    },
    {
      mssv: "mssv 18",
      ten: "ten 18",
      tuoi: 9,
      diaChi: "diaChi 18",
      id: "18",
    },
    {
      mssv: "mssv 19",
      ten: "ten 19",
      tuoi: 11,
      diaChi: "diaChi 19",
      id: "19",
    },
  ];
  // B2: Khai bao 1 bien useState chua list
  const [listSinhVien, setListSinhVien] = useState(sinhViens);

  const filterDate = () => {
    const locData = listSinhVien.filter((s) => s.tuoi > 16);
    setListSinhVien(locData);
  };
  const sortData = () => {
    const listSort = [...listSinhVien].sort((sv1, sv2) => sv1.tuoi - sv2.tuoi);
    setListSinhVien(listSort);
  };
  return (
    <>
      <h1>Bai 8 - BTVN</h1>
      <button onClick={sortData}>Sap xep </button>
      <button onClick={filterDate}>Loc ds sv co tuoi tren 16 </button>
      <table border="1">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {/* trong ReactJS: for => map */}
          {listSinhVien.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.mssv}</td>
              <td>{s.ten}</td>
              <td>{s.tuoi}</td>
              <td>{s.diaChi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Bai5Component;
