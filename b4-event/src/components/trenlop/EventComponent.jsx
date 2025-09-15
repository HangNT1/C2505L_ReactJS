import React, { useState } from "react";

function EventComponent() {
  const [message, setMessage] = useState("");
  const changeValue = (e) => {
    // e: event => lay cac su kien khi input thay doi
    // Lay gia cua o input moi lan thay doi => e.target.value
    setMessage(e.target.value);
  };
  return (
    <>
      <h1>Bai 2 tren lop </h1>
      <span>Message: </span>
      <input type="text" value={message} onChange={changeValue} />
      <p>Value: {message}</p>
    </>
  );
}

export default EventComponent;
