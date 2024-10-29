import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="dimmed">
        <div id="foot-top-head-cont">
          <div id="foot-top-head">
            <div className="foot-top-head-divs">
              <img src={require("../images/icons/address-w.png")} alt="" />
              <span>Fast Delivery (3-5 days)</span>
            </div>
            <div className="foot-top-head-divs">
              <img src={require("../images/icons/address-w.png")} alt="" />
              <span>Fast Delivery (3-5 days)</span>
            </div>
            <div className="foot-top-head-divs">
              <img src={require("../images/icons/address-w.png")} alt="" />
              <span>Fast Delivery (3-5 days)</span>
            </div>
            <div className="foot-top-head-divs">
              <img src={require("../images/icons/address-w.png")} alt="" />
              <span>Fast Delivery (3-5 days)</span>
            </div>
          </div>
        </div>
        <div id="footer-content-cont">
          <div id="foot-newsletter">
            <div id="foot-newsletter-content">
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <span>
                Enter your email bellow to receive discount coupons, special
                offers, exclusive discounts and more!
              </span>
              <div id="foot-newsletter-subscribe">
                <input type="text" placeholder="Please Enter your Email" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div id="foot-newsletter-social-icons"></div>
          </div>
          <section className="foot-mobile-view">
            <div className="foot-mobile-view-divs">
                <details>
                <span>Free Shipping</span>
              <span>24/7 Customer Support</span>
              <span>Money-Back Guarantee</span>
              <span>Warranty Services</span>
              <span>Installation Services</span><summary>
                
              Our Services
                    </summary></details>
                    </div>
            <div className="foot-mobile-view-divs">
                <details>
                <span>Free Shipping</span>
              <span>24/7 Customer Support</span>
              <span>Money-Back Guarantee</span>
              <span>Warranty Services</span>
              <span>Installation Services</span><summary>
                
              Our Services
                    </summary></details>
                    </div>
            <div className="foot-mobile-view-divs">
                <details>
                <span>Free Shipping</span>
              <span>24/7 Customer Support</span>
              <span>Money-Back Guarantee</span>
              <span>Warranty Services</span>
              <span>Installation Services</span><summary>
                
              Our Services
                    </summary></details>
                    </div>
            <div className="foot-mobile-view-divs">
                <details>
                <span>Free Shipping</span>
              <span>24/7 Customer Support</span>
              <span>Money-Back Guarantee</span>
              <span>Warranty Services</span>
              <span>Installation Services</span><summary>
                
              Our Services
                    </summary></details>
                    </div>
            
            
           </section>

          <section id="footer-info-cont">
         
           
            <section className="footer-sub-container" id="serv">
              <h3>OUR SERVICES</h3>
              <span>Free Shipping</span>
              <span>24/7 Customer Support</span>
              <span>Money-Back Guarantee</span>
              <span>Warranty Services</span>
              <span>Installation Services</span>
            </section>
            <section className="footer-sub-container" id="navigation">
              <h3>QUICK LINKS</h3>
              <Link to="/">Home</Link>
              <Link to="/myaccount">My Account</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ</Link>
            </section>
            <section className="footer-sub-container" id="contact">
              <h3>CONTACT</h3>
              <div className="foot-sub-cont-divs">
                <img src={require('../images/icons/address-w.png')} alt="" />
                <span>House no. 430 ,Block 23-Jal vihar, Rishikesh Uttrakhand</span>
              </div>
              <div className="foot-sub-cont-divs">
              <img src={require('../images/icons/address-w.png')} alt="" />
                <span>Anirwal25@gmail.com</span>
              </div>

              <div className="foot-sub-cont-divs">
              <img src={require('../images/icons/phone-w.png')} alt="" />
                <span>7017779761</span>
              </div>
              <div className="foot-sub-cont-divs">
              <img src={require('../images/icons/phone-w.png')} alt="" />
                <span>6585121345</span>
              </div>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
}
