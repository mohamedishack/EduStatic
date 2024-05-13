import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu_icon.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMoileMenu] = useState(false);
  const toggleMenu = () => {
    setMoileMenu(!mobileMenu);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      {mobileMenu ? (
        <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
      ) : (
        <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
      )}
    </nav>
  );
};

export default Navbar;
