import logo from "../utils/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} className="logo"></img>
        </div>
        <h2>Steak House</h2>
      </div>

      <ul className="header-btn">
        <li>Home</li>
        <li>orders</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
