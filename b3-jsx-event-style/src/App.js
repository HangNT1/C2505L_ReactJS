import logo from "./logo.svg";
import "./App.css";
import Bai1Component from "./components/ontap/Bai1Component";
import Bai2Component from "./components/ontap/Bai2Component";
import JSXComponent from "./components/jsx/JSXComponent";
import LuyenTap1 from "./components/jsx/LuyenTap1";
import StyleCompoennt from "./components/style/StyleCompoennt";
import HeaderComponent from "./components/style/header/HeaderComponent";
import LoppComponent from "./components/vonglap/LoppComponent";

function App() {
  return (
    <>
      <h1>Buoi 3</h1>
      {/*
      1. Tao 1 chuong react de dem bien count.
      Tao 2 button: Tang va Giam: 
         Neu gia tri cua bien count trong khoang -10 <=count < 20 thi chuong hoat dong
         Neu khong thi hien thi message ngay canh bien count : Gia tri vuot qua min/max cho phep 
      2. Tao 1 chuong React. Hien thi gia tri cua P,S cua hinh chu nhat khi biet gia tri cua 2 canh (fix cung)
      3. Tao 1 chuong trinh React. Nhap vao ten va o duoi hien thi ra ten vua nhap tu o input
      4. Tao 1 chuong nhap react dung de chuyen nhiet do tu C => F. 
      Co 1 input: nhap gia tri cua bien nhiet do C. 
      Bam vao 1 button Chuyen nhiet 
      5. Lam bai 3->6 trong BTVN Buổi 1
       */}
      <Bai1Component></Bai1Component>
      <Bai2Component></Bai2Component>
      <JSXComponent></JSXComponent>
      <LuyenTap1></LuyenTap1>
      <StyleCompoennt />
      <HeaderComponent></HeaderComponent>
      <LoppComponent></LoppComponent>
    </>
  );
}

export default App;
