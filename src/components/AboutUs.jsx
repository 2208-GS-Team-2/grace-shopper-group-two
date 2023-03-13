import React from "react";

const AboutUs = () => {

  return (
    <div>
      <title>About Us</title>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>About Us</h2>
        <div style={{display: "flex", textAlign: "center"}}>
        <h3 style={{margin: "60px"}}>We are the L.A.S.T coffee shop and we strive not only to serve the finest coffee in the world, we strive to raise that standard every day. We are always learning and sharing as much as we can with the greater community. We’re proud to bring elements of morden future culture into the modern cafe.</h3>
        </div>
        <img
          src="static/images/stockcoffeshop.jpeg"
          style={{ width: "80%", height: "auto" }}
          />
      </div>
    </div>
  )
}

export default AboutUs;