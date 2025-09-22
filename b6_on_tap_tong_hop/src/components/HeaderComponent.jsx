import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <>
      <div>HeaderComponent</div>
      <h1>Test</h1>
      <nav>
        <ul>
          <li>
            {/* The a chinh la the Link */}
            {/* <a href="#">Home</a> */}
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile/456">Profile</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderComponent;
