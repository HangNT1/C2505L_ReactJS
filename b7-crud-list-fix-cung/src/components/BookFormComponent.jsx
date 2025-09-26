import React from "react";

export default function BookFormComponent({
  form1,
  idUpdate1,
  resetData,
  handleSubmit,
  handleChange,
}) {
  return (
    <>
      {/* e.target */}
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="ten"
          value={form1.ten}
          onChange={handleChange}
        />
        <br />
        <br />
        Loại:
        <input
          type="text"
          name="loai"
          value={form1.loai}
          onChange={handleChange}
        />
        <br />
        <br />
        Tác giả:
        <input
          type="text"
          name="tacgia"
          value={form1.tacgia}
          onChange={handleChange}
        />
        <br />
        <br />
        Giá:
        <input
          type="text"
          name="gia"
          value={form1.gia}
          onChange={handleChange}
        />
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
