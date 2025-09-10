// Tạo một biến isAdmin và hiển thị nội dung khác
//  nhau cho người dùng là admin và không phải admin.
// Nếu isAdmin là true, hiển thị thông báo "Xin chào, Admin";
// nếu không, hiển thị "Xin chào, người dùng".
// Thêm một nút cho phép người dùng chuyển đổi giữa chế độ admin
// và không admin.

import { useState } from "react";

function Bai3Component() {
  const [isAdmin, setIsAdmin] = useState(true);
  function clickMe() {
    // if(status === "Online"){
    //     setStatus("IsActive")
    // }else if()
    // if (isAdmin) {
    //   setIsAdmin(false);
    // } else {
    //   setIsAdmin(true);
    // }
    // isAdmin = true
    // !true = false
    // isAdmin = false
    // !false = true
    setIsAdmin(!isAdmin);
  }
  return (
    <>
      {/* isAdmin: true => Hien thi text tren giao dien Xin chào, Admin
        false: Xin chào, người dùng
        1 bien thay doi => useState  (isAdmin)
         */}
      <h1>Bai 3</h1>
      <p>{isAdmin === true ? "Xin chao Admin" : "Xin chao nguoi dung"}</p>
      <button onClick={clickMe}>Change value</button>
    </>
  );
}

export default Bai3Component;
