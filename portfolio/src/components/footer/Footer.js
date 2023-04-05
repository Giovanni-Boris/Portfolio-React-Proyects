import React from "react";
import "./footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Hacker Rank</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +51 954 - 464 - 645
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              borisgiovanni2002@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <FaFacebook
            size={40}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <FaLinkedin
            size={40}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
