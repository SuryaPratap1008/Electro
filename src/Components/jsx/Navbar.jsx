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
          <Link to="/faqs" className="nav-element">
            FAQ'S
          </Link>
          <Link to="/faqs" className="nav-element">
            BLOG
          </Link>
          <Link to="/products" className="nav-element">
            PROUCTS
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
