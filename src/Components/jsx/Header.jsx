import React, { useEffect, useState } from "react";
import "../css/header_resp.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [loggedIn, setloggedIn] = useState(null);
  const [click, setClick] = useState(null);
  // console.log(a.name)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  }, [click]);

  function logout() {
    localStorage.removeItem("token");
    setClick("clicked");
  }
  function mobileNav(event) {
    const mobile_nav = document.getElementById("mobile-nav");
    // mobile_nav.style.display = "flex";
    // mobile_nav.style.width = "300px";
    mobile_nav.animate( [
      { left: "-300px" },
      { left: "0px"},
    ],
    { duration: 250, fill: "forwards", iterations: 1 })
    mobile_nav.style.top = `${window.scrollY}px`
    document.body.style.overflow = "hidden"
    // const blurElements = document.body.getElementsByClassName('dimmed')
    // for(let i = 0;i<blurElements.length;i++){
    //   blurElements[i].style.opacity = "70%"
    // }
    const overlay = document.createElement('div')
    overlay.addEventListener('click',(event)=>{
      const mobile_nav = document.getElementById("mobile-nav");
      mobile_nav.animate( [
        { left: "0px" },
        { left: "-300px"},
      ],
      { duration: 250, fill: "forwards", iterations: 1 })
      document.body.style.overflow = "auto"
     
      document.body.removeChild(overlay)
    })
    overlay.id = "overlay"
    overlay.style.backgroundColor = "grey"
    overlay.style.opacity = "50%"
    overlay.style.zIndex = 1
    overlay.style.position = "absolute"
    overlay.style.top = "0px"
    overlay.style.width = "100vw"
    overlay.style.height = `${document.body.scrollHeight}px`
    document.body.appendChild(overlay)

  
  }
  function mobileNavClick() {
    const mobile_nav = document.getElementById("mobile-nav");
    const overlay = document.getElementById('overlay')
    document.body.removeChild(overlay)
    // mobile_nav.style.left = "-300px";
    mobile_nav.animate( [
      { left: "0px" },
      { left: "-300px"},
    ],
    { duration: 100, fill: "forwards", iterations: 1 })
    document.body.style.overflow = "auto"

    
  }
  return (
    <>
      <div id="mobile-nav" >
        <div id="mobile-nav-section1">
          <Link onClick={mobileNavClick} to="/" className="nav-element">
            <span> HOME</span>
          </Link>
          <Link onClick={mobileNavClick} to="/phones" className="nav-element">
            <span> PHONES</span>
          </Link>
          <Link to="/television" onClick={mobileNavClick} className="nav-element">
            <span> TELEVISION</span>
          </Link>
          <Link to="/speakers" onClick={mobileNavClick} className="nav-element">
            <span> SPEAKERS</span>
          </Link>
          <Link to="/headphones" onClick={mobileNavClick} className="nav-element">
            <span> HEADPHONES</span>
          </Link>

          <Link to="/ac" onClick={mobileNavClick} className="nav-element">
            <span> AIR CONDITIONERS</span>
          </Link>
          <Link to="/about" onClick={mobileNavClick} className="nav-element">
            <span> ABOUT</span>
          </Link>
          <Link to="/contact" onClick={mobileNavClick} className="nav-element">
            <span> CONTACT</span>
          </Link>
        </div>
        <div id="mobile-nav-section2">
        <div className="mobile-nav-section2-divs">
          <Link to="/myaccount" onClick={mobileNavClick}>
          <img src={require('../images/icons/phone-b.png')} alt="" />
          <span>Surya pratap</span>
          
          </Link>
        </div>
        <div className="mobile-nav-section2-divs">
          <Link to="/cart" onClick={mobileNavClick}>
          <img src={require('../images/icons/cart-b.png')} alt="" />
          <span>Cart</span>
          
          </Link>
        </div>
        <div className="mobile-nav-section2-divs">
        <img src={require('../images/icons/address-b.png')} alt="" />
          <span>Electro123@gmail.com</span>
        </div>
        <div className="mobile-nav-section2-divs">
        <img src={require('../images/icons/phone-b.png')} alt="" />
          <span>+913345623454</span>
        </div>
          <p>Free Shipping on orders above Rs. 1340</p>
       

        </div>

      </div>
      <div id="tt-head-cont" className="dimmed">
        <div id="top-head-cont">
          <div id="top-head">
            <div id="mobile-view-left" className="mobile-view">
              <img
                src={require("../images/icons/menu.png")}
                onClick={mobileNav}
                alt=""
              />
              <img src={require("../images/icons/search-w.png")} alt="" />
            </div>
            <Link id="logo-link" to="/">
              <img
                src={require("../images/logo/electo-logo-w.png")}
                id="logo"
                alt=""
              />
            </Link>
            <div id="mid-cont" className="desktop-view">
              <input
                type="text"
                name="searchbar"
                id="searchbar"
                // placeholder={a.name}
              ></input>
              <button>
                <img src={require("../images/icons/search-b.png")} alt="" />
              </button>
            </div>

            <div id="header-right-cont" className="desktop-view">
              <div id="auth-btn">
                <Link
                  className={`auth-link ${loggedIn == true ? "invisible" : ""}`}
                  to="/login"
                >
                  <button>LogIn</button>
                </Link>
                <Link
                  className={`auth-link ${loggedIn == true ? "invisible" : ""}`}
                  to="/signup"
                >
                  <button>SignUp</button>
                </Link>
                <Link
                  onClick={logout}
                  className={`auth-link ${loggedIn == true ? "" : "invisible"}`}
                  id="myaccount"
                  to="/"
                >
                  <button>Logout</button>
                </Link>
                <Link
                  className={` ${loggedIn == true ? "" : "invisible"}`}
                  id="myaccount"
                  to="/myaccount"
                >
                  <span>My account</span>
                </Link>
              </div>
              <Link to="/cart" className="cart">
                <img src={require("../images/icons/cart2-w.png")} alt="" />
              </Link>
              <div id="cart-count">3</div>
            </div>
            <div id="mobile-view-right" className="mobile-view">
              <Link to="/myaccount" ><img src={require("../images/icons/user-w.png")} alt="" /></Link>
              <Link to="/cart" ><img src={require("../images/icons/cart2-w.png")} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
