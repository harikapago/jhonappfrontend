import React from "react";
import "./styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Keyboard ,Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import pic1 from "../assets/testimonials/man1.png"; 
import pic2 from "../assets/testimonials/man2.png";
import pic3 from "../assets/testimonials/nam3.jpg";
import pic4 from "../assets/testimonials/nam4.jpg";
import pic5 from "../assets/testimonials/nam5.jpg";
import pic6 from "../assets/testimonials/nam6.jpg";
import top from "../assets/testimonials/top.gif";


SwiperCore.use([Autoplay]);

const data = [
  {
    name: "Rajath",
    designation: "Brigade Group, Pune",
    feedback:
      "The Essential product from VRNow helped us tremendously in  of the project to our clients. Essential product was delivered to us in 7 days and we are happy with the team.",
    img: pic1,
  },

  {
    name: "Sanjay",
    designation: "Aadharsh Developers, Bengaluru",
    feedback:
      "Our clients were truly impressed by the location insights brought to life through VRNow's Essential product. The quick 7-day delivery showcased the team's efficiency and dedication.",
    img: pic2,
  },
  {
    name: "Monica",
    designation: "Neminath Group, Hyderabad",
    feedback:
      "VRNow's metaverse is a playground of endless possibilities, where digital landscapes come to life, connecting people, ideas, and experiences in ways never thought possible.",
    img: pic3,
  },
  {
    name: "A S Khan",
    designation: "MICL Group, Bengaluru",
    feedback:
      "We have Immersed in the enchanting metaverse meticulously shaped by VRNow, where every pixel, interaction, and connection is a brushstroke on the canvas of a digital.",
    img: pic4,
  },
  {
    name: "Santhoshi",
    designation: "Rustomjee Developers, Bengaluru",
    feedback:
      "With VRNow's 3D products, Our ideas ordinary becomes extraordinary. Delved into an ecosystem of limitless possibilities, where visual storytelling takes on a new dimension. ",
    img: pic5,
  },
  {
    name: "Shishir Gupta",
    designation: "Starwing Developers, Pune",
    feedback:
      "We owe our success in presenting location advantages to VRNow's Essential product.Exceptional teamwork have left a lasting positive impression, making VRNow our go-to choice.",
    img: pic6,
  },
];

const Testimonials = () => {
  return (
    
    <div style={{padding:"15px",marginTop:"4rem",width:"100%"}}>
        
      <div
        className="testbg2"
        style={{
          // width: "77.77%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "black",

          
          paddingBottom: "5rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{fontWeight:"bold"}}>Testimonials</h2>
          <h5 style={{fontWeight:"500"}}>See how others are feeling about us</h5>
        </div>
        <div className="container" style={{color:"white"}}>
          <Swiper
            breakpoints={{
              992: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
              380: {
                slidesPerView: 1,
              },
              260: {
                slidesPerView: 1,
              },
            }}
            slidesPerView={2}
            spaceBetween={0}
            loop={true}
            // navigation={true}
            pagination={false}
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            keyboard={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            className="mySwiper my-3 bg-transparent"
           
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                     color:"black",
                      padding: "1rem",
                      borderRadius: "15px",
                      marginRight: "1rem",
                      marginLeft: "1rem",
                      fontWeight:"bold"
                    }}
                    className="slidebg"
                  >
                    <img
                      src={top}
                      alt="img"
                      style={{ height: "2rem", width: "3rem" }}
                    />
                    <p className="testpar"
                      style={{
                        padding: "1rem",
                        paddingLeft: "3rem",
                        
                      }}
                    >
                      {item.feedback}
                    </p>
                    <div style={{ display: "flex", paddingLeft: "1rem" }}>
                      <img
                        src={item.img}
                        alt="img"
                        className="testimg"
                        style={{borderRadius:"50px"}}
                        // style={{ width: "4.5rem", height: "4.5rem" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          paddingLeft: "1rem",
                        }}
                      >
                        <p style={{ fontSize: "85%", margin: "0" }}>
                          {item.name}
                        </p>
                        <p style={{ fontSize: "80%" }}>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      </div>
  );
};

export default Testimonials;
