import React, { useState } from "react";

export default function ProductPage() {
  const productDefault = [
    {
      name: "name 1",
      price: 38,
      color: "color 1",
      ram: "ram 1",
      id: "1",
    },
    {
      name: "name 2",
      price: 15,
      color: "color 2",
      ram: "ram 2",
      id: "2",
    },
    {
      name: "name 3",
      price: 16,
      color: "color 3",
      ram: "ram 3",
      id: "3",
    },
    {
      name: "name 4",
      price: 83,
      color: "color 4",
      ram: "ram 4",
      id: "4",
    },
    {
      name: "name 5",
      price: 8,
      color: "color 5",
      ram: "ram 5",
      id: "5",
    },
    {
      name: "name 6",
      price: 33,
      color: "color 6",
      ram: "ram 6",
      id: "6",
    },
    {
      name: "name 7",
      price: 4,
      color: "color 7",
      ram: "ram 7",
      id: "7",
    },
    {
      name: "name 8",
      price: 33,
      color: "color 8",
      ram: "ram 8",
      id: "8",
    },
    {
      name: "name 9",
      price: 36,
      color: "color 9",
      ram: "ram 9",
      id: "9",
    },
    {
      name: "name 10",
      price: 14,
      color: "color 10",
      ram: "ram 10",
      id: "10",
    },
    {
      name: "name 11",
      price: 63,
      color: "color 11",
      ram: "ram 11",
      id: "11",
    },
    {
      name: "name 12",
      price: 66,
      color: "color 12",
      ram: "ram 12",
      id: "12",
    },
  ];
  const [listProduct, setListProduct] = useState(productDefault);

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Gia</th>
            <th>Mau sac </th>
            <th>Ram</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((pro, i) => (
            <tr key={pro.id}>
              <td>{i}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>{pro.color}</td>
              <td>{pro.ram}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
