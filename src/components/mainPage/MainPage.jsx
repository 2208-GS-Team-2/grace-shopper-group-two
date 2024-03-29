import React from "react";
import "./mainPageStyle.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

const MainPage = ({ quantity, user }) => {
  return (
      <div>
      {/* Slider section */}
      <section className="slider">
        <div className="container">
          <img src="static/images/slider1.jpg" alt="slider-image" />
        </div>
      </section>

      {/* Touch Section */}
      <div className="touch">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">get in touch</h2>
            <span className="line"></span>
          </div>
          <div className="touch-content">
            <div className="touch-item">
              <PhoneIcon fontSize={"large"} />
              <h3 className="touch-phone">phone</h3>
              <span className="touch-phone-number">333-333-3333</span>
            </div>
            <div className="touch-item mg">
              <EmailIcon fontSize={"large"} />
              <h3 className="touch-email">email</h3>
              <span className="email">email@support.com</span>
            </div>
            <div className="touch-item">
              <BusinessIcon fontSize={"large"} />
              <h3 className="touch-address">address</h3>
              <span className="address">1234 Bubby Drive</span>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainPage;
