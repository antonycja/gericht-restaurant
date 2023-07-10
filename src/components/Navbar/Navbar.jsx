import "./navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="logo">
            <img
              src="src/assets/gericht.png"
              alt="logo"
            />
          </div>
          <ul className="main-nav-links">
            <li className="nav-link">Home</li>
            <li className="nav-link">Pages</li>
            <li className="nav-link">Contact Us</li>
            <li className="nav-link">Blog</li>
            <li className="nav-link">Landing</li>
          </ul>
          <div className="nav-btn">
            <p>Log In/Registration</p>
            <div className="line">
              <svg
                width="2"
                height="57"
                viewBox="0 0 2 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Line">
                  <path
                    id="Vector 5"
                    d="M1 0V57"
                    stroke="url(#paint0_radial_572_127)"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_572_127"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"
                  >
                    <stop
                      offset="0.588542"
                      stopColor="white"
                    />
                    <stop
                      offset="1"
                      stopColor="white"
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <p>Book Table</p>
          </div>

          <div className="small-screen-nav">
            <GiHamburgerMenu
              color="#fff"
              className="hamburger"
              fontSize={27}
              onClick={() => {
                setActive(true);
              }}
            />
            {active && (
              <div className="small-nav-overlay">
                <div className="small-nav">
                  <ul className="nav-links">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">Pages</li>
                    <li className="nav-link">Contact Us</li>
                    <li className="nav-link">Blog</li>
                    <li className="nav-link">Landing</li>
                  </ul>
                </div>
                <MdOutlineRestaurantMenu
                  fontSize={27}
                  className="overlay-close"
                  onClick={() => {
                    setActive(false);
                  }}
                />
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
