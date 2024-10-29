import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar_resp.css";
export default function Navbar() {
  return (
    <>
      <div id="nav-cont" className="dimmed">
        <nav>
          <Link to="/" className="nav-element">
            HOME
          </Link>
          <Link to="/products/phones" className="nav-element">
            SMARTPHONE
          </Link>
          <Link to="/television" className="nav-element">
            TELEVISION
          </Link>
          <Link to="/speakers" className="nav-element">
            SPEAKER
          </Link>
          <Link to="/headphones" className="nav-element">
            HEADPHONE
          </Link>

          <Link to="/ac" className="nav-element">
            AIR CONDITIONER
          </Link>
          <Link to="/about" className="nav-element">
            ABOUT
          </Link>
          <Link to="/contact" className="nav-element">
            CONTACT
          </Link>
        </nav>

      </div>
      
    </>
  );
}
