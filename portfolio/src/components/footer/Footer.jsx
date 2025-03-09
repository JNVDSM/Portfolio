import React from "react";
import "./Footer.css"
function Footer(){
    return(
        <div className="footer">
          <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" />
                
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
            <div className="footr-bottom-left"></div>
            <div className="footer-bottom-right">
                
                <p>Jhansi Mannidi's</p>
            </div>
          </div>
        </div>
    )
}
export default Footer;