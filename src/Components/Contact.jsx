import React from "react";
import "./styles/contact.css";
import tm1 from "../assets/teams/tm1.gif";
import tm2 from "../assets/teams/tm2.gif";
import tm3 from "../assets/teams/tm3.gif";
import tm4 from "../assets/teams/tm4.gif";

import bt1 from "../assets/teams/bt1.png";
import bt3 from "../assets/teams/bt3.png";
import bt4 from "../assets/teams/bt4.png";

const Contact = () => {
  return (
    <div id="contact-us" className="container-fluid " style={{ backgroundColor: "black" }}>
      <div
        className="teambg"
        style={{
          // width: "88%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        //   height: "100vh",
          paddingTop: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{fontWeight:"bold"}}>Contact Us</h2>
          <h6 style={{ paddingTop: "1.5rem",fontWeight:"bold" }}>Let’s us know how we can help</h6>
        </div>

        <div>
          <div className="grid-container1">
          
          <div className="grid-item1">

              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Send us a mail
              </h6>
              <img
                src={tm1}
                alt="img"
                className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt1}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
              <a href="mailto:multitechelectronicsrjy@gmail.com">  <p style={
                  {fontSize:"0.7rem"}
                } >multitechelectroni <br></br>
                csrjy@gmail.com
                
                </p> </a>
              </div>
            </div>
            
              
             <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
               Follow Us 
              </h6>
              <img
                src={tm2}
                alt="img"
               className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt1}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
            <a href="https://instagram.com/multitech_ledtv_repair?utm_source=qr">
                <p style={{fontSize:"0.7rem"}}>mutlitech_ledtv</p></a>
              </div>
            </div>
          

         
         <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Visit Us
              </h6>
              <img
                src={tm3}
                alt="img"
               className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt3}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
            <a href="https://www.google.com/maps/place/MULTITECH+ELECTRONICS/@16.9943653,81.7760166,15z/data=!4m6!3m5!1s0x3a37a5f412115973:0x9e4f8aa7e14e5e18!8m2!3d16.9943653!4d81.7760166!16s%2Fg%2F11flkbzcc6?entry=ttu">
                <p style={{fontSize:"0.7rem"}}>Location Link: Rajahmundry, 533101</p>  </a> 
              </div>
            </div>
            
        
            <div className="grid-item1">
              <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                Call Us
              </h6>
              <img
                src={tm4}
                alt="img"
                className="teampic"
              />
              <div style={{ display: "flex" }}>
                <img
                  src={bt4}
                  alt="img"
                  style={{ height: "1rem", marginRight: "0.3rem" }}
                />
             <a href="tel:7995716742"> <p style={{fontSize:"0.7rem"}}>7008812287, 9640597016</p> </a>  
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
