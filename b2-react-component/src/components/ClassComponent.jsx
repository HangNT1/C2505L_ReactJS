import React from "react";
class ClassComponenet extends React.Component {
  // Giao HTML => return nhung duoc dat trong render
  /**
   * Vòng đời trong React JS
   * initialtion -> Mounting -> updating -> Unmouting
   * Khởi tạo => Lắp ráp(Được gán vào dom) -> Cập nhập giá trị thay đổi -> Xoá khỏi dom
   */
  // Gia tri ban dau count = 0 (Khoi tao) : Contructor
  constructor(props) {
    super(props);
    // Khoi tao gia tri ban dau cua bien count = 0 => state
    this.state = {
      count: 0,
      count1: 10,
      // liet ke o day
    };
    // Khoi tao 1 lan duy nhat => ban dau
    console.log("Contructor: Component khoi tao 1 lan duy nhat");
  }
  // Mounting: Lap rap => gan gia tri phan tu vao dom
  // Gan khi giao dien bat dau render
  componentDidMount() {
    console.log("Gia tri cua bien count: " + this.state.count);
    console.log("Mounting: Component gan 1 lan duy nhat vao dom: ");
  }
  // Updating
  componentDidUpdate() {
    console.log("Updating: Compoennt count thay doi gia tri tren dom");
  }

  // huy dom
  componentWillUnmount() {
    console.log("Dom bien mat");
  }
  increaseNumber = () => {
    // gia tri cua bien count ++
    this.setState({
      count: this.state.count + 1,
    });
  };
  decreaseNumber = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  /**
   * Dom thât & Dom ao (virual dom)
   * 1 dom that -> .html
   */
  render() {
    return (
      <>
        <h2>Class component</h2>
        <p>Count: {this.state.count} </p>
        <button onClick={this.increaseNumber}>Click me</button>
        <button onClick={this.decreaseNumber}>Click -</button>
      </>
    );
  }
}
export default ClassComponenet;
