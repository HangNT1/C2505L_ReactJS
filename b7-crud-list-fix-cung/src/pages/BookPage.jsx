import React, { useState } from "react";
import BookFormComponent from "../components/BookFormComponent";

export default function BookPage() {
  //
  const listBanDau = [
    {
      ten: "ten 1",
      loai: "loai 1",
      tacgia: "tacgia 1",
      gia: 79,
      id: "1",
    },
    {
      ten: "ten 2",
      loai: "loai 2",
      tacgia: "tacgia 2",
      gia: 66,
      id: "2",
    },
    {
      ten: "ten 3",
      loai: "loai 3",
      tacgia: "tacgia 3",
      gia: 7,
      id: "3",
    },
    {
      ten: "ten 4",
      loai: "loai 4",
      tacgia: "tacgia 4",
      gia: 85,
      id: "4",
    },
    {
      ten: "ten 5",
      loai: "loai 5",
      tacgia: "tacgia 5",
      gia: 47,
      id: "5",
    },
  ];
  const [listBook, setListBook] = useState(listBanDau);

  const [form, setForm] = useState({
    ten: "",
    loai: "",
    tacgia: "",
    gia: 0,
  });

  const [idUpdate, setIdUpdate] = useState(null);
  // idUpdate = null => Add
  // !=null => Update
  function removeBook(id1) {
    // KHONG DUOC LAM VIEC TRUC TIEP TREN LIST USESTATE => ANH HUONG DEN VIEC RENDER LAI GIAO DIEN
    // COPY LIST BOOK ... => COPY
    const listCopy = [...listBook];
    // const objectCopy = {...listBook}
    // B1: Tim vi tri => findIndex
    const i = listCopy.findIndex((b) => b.id === id1);
    // const index = -1;
    // for(let i = 0 ;i <listCopy.length();i++){
    //     if(listCopy[i].id === id1){
    //         index = i;
    //         break;
    //     }
    // }
    // splice(vi tri)
    // B2: Xoa ra khoi danh sach
    listCopy.splice(i, 1); // i: vi tri muon xoa, 1: 1 phan tu can xoa
    // B3: Thay doi gia tri cua listBook
    setListBook(listCopy);
  }
  function removeBook1(index) {
    const listCopy = [...listBook];
    listCopy.splice(index, 1);
    setListBook(listCopy);
  }
  const handeleDetail = (book) => {
    setForm(book);
    setIdUpdate(book.id); // Lay id cua doi tuong vua click
  };
  const handleReset = () => {
    // ke code gi thi code
    // alert("Reset cha");
    setForm({
      ten: "",
      loai: "",
      tacgia: "",
      gia: 0,
    });
    setIdUpdate(null);
  };
  // Add & Update
  const handleSubmit = () => {};
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Quản lý sách trong thư viện</h1>
      <h2 style={{ textAlign: "center" }}>Thông tin của sách</h2>
      <BookFormComponent
        form1={form}
        idUpdate1={idUpdate}
        resetData={handleReset}
        handleSubmit={handleSubmit}
      />
      <h3 style={{ textAlign: "center" }}>Danh sách sách trong thư viện</h3>
      <table
        border={1}
        cellPadding={10}
        cellSpacing={0}
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Loại</th>
            <th>Tác giả</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {listBook.map((p, index1) => (
            <tr key={p.id}>
              <td>{index1 + 1}</td>
              <td>{p.ten}</td>
              <td>{p.loai}</td>
              <td>{p.tacgia}</td>
              <td>{p.gia}</td>
              <td>
                <button
                  style={{ marginRight: "10px" }}
                  onClick={() => handeleDetail(p)}
                >
                  Detail
                </button>
                <button
                  onClick={() => removeBook(p.id)}
                  style={{ marginRight: "10px" }}
                >
                  Remove
                </button>
                <button onClick={() => removeBook1(index1)}>Remove1</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
