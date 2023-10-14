import React, { useState, useEffect } from 'react';
import img1 from "../assets/tv1.jpg";
import img2 from "../assets/tv2.jpg";
import img3 from "../assets/tv3.jpg";
import img4 from "../assets/tv4.jpg";
import img5 from "../assets/tv5.jpg";
import img6 from "../assets/tv45.jpg";
import s1 from "../assets/s1.png";
import s2 from  "../assets/s22.png";
import s3 from "../assets/s3.png";
import s4 from  "../assets/s4.png";


import "./styles/topse.css";
import Run from './Run';

const Topse = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImageImages = [
    img1, img2, img3, img4, img5,img6
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current image index and loop back to the first image
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImageImages.length
      );
    }, 2500); // Change the background image every 1 second (1000 milliseconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  

  return (
    <div id="home" style={{width:"100%"}}>
    <div style={{backgroundImage: `url(${backgroundImageImages[currentImageIndex]})`,color:"white",}} className='topdiv'>
      <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"2rem",height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

      <h1> One Stop Solution For All Your TV Problems</h1>
      <p>The <span style={{fontWeight:"bold",fontSize:"23px"}}>No.1</span>  TV repair Service in <span style={{fontWeight:"bold",fontSize:"23px"}}> Rajahmundry</span>,  bringing your entertainment back to life.</p>
      <a href="tel:7995716742" className='btn btn1'>Call Now : 7995716742 </a>

        </div>
        
        
    </div>
    <div className='row topsec2' >
        <div className='col-12 col-md-3' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} 
        src={s1}/>
        <h4>Doorstep Service</h4>
        <p>Bringing expertise to your doorstep for a hassle-free experience, making life easier.</p>
        
        </div> 
        <div className='col-12 col-md-3' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} 
        src={s4}/>
        <h4>Genuine Spares</h4>
        <p>We use original spare parts only and provide invoice with Warranty.</p>
        
        </div> 
        <div className='col-12 col-md-3' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} 
        src={s2}/>
        <h4>Trusted Service</h4>
        <p>We cover all brands, ensuring your devices are in Trusted Service, no matter the make.</p>
        
        </div> 
        <div className='col-12 col-md-3' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} 
         src={s3}/>
        <h4>Certified Service Provider</h4>
        <p>Our experts are certified professionals with the knowledge to fix it right.</p>
        
        </div> 
       
        

    </div>
    </div>
  );
};

export default Topse;
