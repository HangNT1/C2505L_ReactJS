import React, { useEffect, useState } from "react";
import BookFormComponent from "../components/BookFormComponent";

export default function BookPageAPI() {
  //
  const API = "https://688b1d182a52cabb9f50226b.mockapi.io/bai6";
  const [listBook, setListBook] = useState([]);

  // load data
  const loadData = async () => {
    const response = await fetch(API); // lay ra toan bo du lieu
    const data = await response.json(); // tra ve json
    setListBook(data);
  };
  // Khoi tao load data ngay tu luc ban dau
  useEffect(() => {
    loadData();
  }, []); // CHI GOI LUC DAU

  const [form, setForm] = useState({
    ten: "",
    loai: "",
    tacgia: "",
    gia: 0,
  });

  const [idUpdate, setIdUpdate] = useState(null);
  // idUpdate = null => Add
  // !=null => Update
  const [id, setId] = useState(6); // gia tri truyen vao = size ban dau  +1
  // function removeBook(id1) {

  // }
  const removeBook = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    loadData();
  };
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
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngan lai hanh dong reload lai trng cua form
    // idUpdate = null => Add
    // idUpdate !=null => Update
    if (idUpdate != null) {
      // Update data
      //B1: Lay ra doi tuong can update
      alert(idUpdate);
      const bookUpdate = {
        // ten, loai, gia, tac gia,id
        ...form,
        id: idUpdate,
      };
      // B2: Update doi tuong vao ds => idUpdate
      const listSauKhiUpdate = listBook.map((b) =>
        b.id === idUpdate ? bookUpdate : b
      );
      // B3: Set list moi
      setListBook(listSauKhiUpdate);
    } else {
      // Add data
      // [
      //   {

      //   }
      // ]
      setListBook([
        ...listBook,
        {
          ...form, // COPY LAI THUOC TINH
          id: id,
        },
      ]);
      setId(id + 1); // de cho id tu tang
    }
    handleReset();
  };
  // De cap nhap gia tri thay doi cua o input khi them/update
  const handleChange = (e) => {
    // BIEN NAY CUA THUOC TINH NAO CUA O INPUT => name
    // GIA TRI CUA THUOC TINH NAY O INPUT => value
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      // diaChi : "Ha noi"
    });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Quản lý sách trong thư viện</h1>
      <h2 style={{ textAlign: "center" }}>Thông tin của sách</h2>
      <BookFormComponent
        form1={form}
        idUpdate1={idUpdate}
        resetData={handleReset}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
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
                {/* <button onClick={() => removeBook1(index1)}>Remove1</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
