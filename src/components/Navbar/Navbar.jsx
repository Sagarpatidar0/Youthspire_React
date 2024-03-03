import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIcon1, setIsIcon1] = useState(true);
  const ref = useRef();

  const toggleIcon = () => {
    setIsIcon1(!isIcon1);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = () => {
    toggleDropdown();
    toggleIcon();
    ref.current.te;
  };

  return (
    <>
      <div className="BgImage">
        <img src="./images/image-bg.png" />
      </div>

      <nav className={isOpen ? "Navbar bg-trans" : "Navbar"}>
        <div className="logo">
          <img src="./images/logo.png" />
        </div>

        <div className="content">
          <ul className="list">
            <li>
              <a className="home" href="">
                HOME
              </a>
            </li>
            <li>
              <a className="about us" href="">
                About us
              </a>
            </li>
            <li>
              <a className="about us" href="">
                Contact us
              </a>
            </li>
            <li>
              <a className="about us" href="">
                Rank
              </a>
            </li>

            <li className="navbar-dropdown" onClick={toggleDropdown}>
              <span>Community</span>
              <span>
                <IoMdArrowDropdown />
              </span>
              {isOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/dropdown-item1">Community</a>
                  </li>
                  <li>
                    <a href="/dropdown-item2">Brands</a>
                  </li>
                  <li>
                    <a href="/dropdown-item3">Contact us</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div className="contact">
                <button>CONTACT US</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="dropdown-toggle" onClick={handleDropdownClick}>
          {isIcon1 ? <FaBars /> : <RxCross2 />}
          {isOpen && (
            <ul className="dropdown-list">
              <li>
                <a href="/dropdown-item1">HOME</a>
              </li>
              <li>
                <a href="/dropdown-item2">About us</a>
              </li>
              <li>
                <a href="/dropdown-item3">CONTACT US</a>
              </li>
              <li>
                <a href="/dropdown-item3">Rank</a>
              </li>
              <li>
                <div className="contact">
                  <button className="contact-btn">CONTACT US</button>
                </div>
              </li>

              <li className="navbar-dropdown" onClick={toggleDropdown}>
                <span>Community</span>
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/dropdown-item1">Community</a>
                    </li>
                    <li>
                      <a href="/dropdown-item2">Brands</a>
                    </li>
                    <li>
                      <a href="/dropdown-item3">Contact us</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div
        ref={ref}
        className={isOpen ? "animate-out dummyImage" : "animate-in dummyImage"}
      >
        <img src="./images/NAV L.png" />
      </div>
    </>
  );
}

export default Navbar;
