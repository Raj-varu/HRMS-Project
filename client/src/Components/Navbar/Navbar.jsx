import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link className="navbar-container" to={"/"}>
        <img className="logo-img" src="./logo.jpeg" alt="logo" />
        <h1 className="lms-name">Digital Lync</h1>
      </Link>
    </>
  );
};

export default Navbar;
