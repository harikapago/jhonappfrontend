import React from "react";
import "./styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Keyboard ,Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import top from "../assets/testimonials/top.gif";


SwiperCore.use([Autoplay]);

const data = [
  {
    name: "A Shyam Kiran",
    designation: "Rajamundry",
    feedback:
      "Visited for Screen issue for my 9 years old 46 inch 3d sony TV... understood the problem very well  and had resolved it in couple of days... Authorised service center suggested me to change the screen that could have charged me 33k... but i got that fixed under 5k.. probably very skilled and budget friendly Electronics repair shop in Rajahmundry",
      
  },

  {
    name: "Chiranjeevi Mallarapu",
    designation: "Rjahmundry",
    feedback:
      "Very good service and fast service.. Problem solved very fast"
  },
  {
    name: "Naveen Kumar Talla",
    designation: "Rajahmundry",
    feedback:
      "My TV is Sony 43 my tv screen prbm like  updown picture i went to authorizers service centre and he told approximately 18000/- and i went to this shop and told about the problem , wit in two days repaired and his charges including service charge only 5500/- im really shocked.. Good Service value for money."
  },
  {
    name: "Kasim Basha",
    designation: " Rajahmundry",
    feedback:
      "Best TV repair in Rajahmundry,I had a persistent sound issue with my TV, and this repair service not only fixed the problem promptly but also provided excellent customer support throughout. The sound quality is now better than ever, and I'm thoroughly satisfied with their work."
  },
  {
    name: "Lavanya",
    designation: "Rajahmundry",
    feedback:
      "I had an issue with my OLED TV screen, and I'm extremely impressed with the repair service I received. They were quick to diagnose the problem and expertly repaired my TV, restoring it to its pristine state. The picture quality is now even better than before. I highly recommend their OLED TV repair services."
  },
  {
    name: "Ramesh P",
    designation: "Rajahmundry",
    feedback:
      "I was worried when my plasma TV's motherboard malfunctioned, but this shop came to the rescue. Their technicians demonstrated exceptional skill and professionalism throughout the repair process. They not only fixed the issue promptly but also explained the problem and the repair steps clearly. My TV now works flawlessly, and I'm extremely satisfied with the top-notch service they provided."
  },
];

const Testimonials = () => {
  return (
    
    <div id="reviews" style={{padding:"15px",marginTop:"4rem",width:"100%"}}>
        
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
          <h2 style={{fontWeight:"bold"}}>Customer Reviews</h2>
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
                      {/* <img
                        src={item.img}
                        alt="img"
                        className="testimg"
                        style={{borderRadius:"50px"}}
                        // style={{ width: "4.5rem", height: "4.5rem" }}
                      /> */}
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
