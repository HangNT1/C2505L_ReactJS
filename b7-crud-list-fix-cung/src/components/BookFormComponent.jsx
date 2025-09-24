import React from "react";

export default function BookFormComponent({
  form1,
  idUpdate1,
  resetData,
  handleSubmit,
}) {
  return (
    <>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        Name: <input type="text" value={form1.ten} />
        <br />
        <br />
        Loại: <input type="text" value={form1.loai} />
        <br />
        <br />
        Tác giả: <input type="text" value={form1.tacgia} />
        <br />
        <br />
        Giá: <input type="text" value={form1.gia} />
        <br />
        <br />
        <button type="submit" style={{ marginRight: "30px" }}>
          {!idUpdate1 ? "Add" : "Update"}
        </button>
        <button type="button" onClick={resetData}>
          Reset
        </button>
      </form>
    </>
  );
}
