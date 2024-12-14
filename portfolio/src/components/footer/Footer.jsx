import React from "react";
import "./Footer.css"
function Footer(){
    return(
        <div className="footer">
          <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio eum pariatur delectus itaque illum odit nemo sint obcaecati iste.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                <i class="bi bi-person"></i><input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="footr-bottom-left">© 2024 Your Company Name. All rights reserved</div>
            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
          </div>
        </div>
    )
}
export default Footer;