import React, { useState, useEffect } from 'react';
import img1 from "../assets/tv1.jpg";
import img2 from "../assets/tv2.jpg";
import img3 from "../assets/tv3.jpg";
import img4 from "../assets/tv4.jpg";
import img5 from "../assets/tv5.jpg";

import "./styles/topse.css";
import Run from './Run';

const Topse = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImageImages = [
    img1, img2, img3, img4, img5
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

      <h1>One Stop Solution For All Your TV Problems</h1>
      <p>Experience TV repair like never before with our Service, bringing your entertainment back to life.</p>
      <button className='btn btn1'>Call Now : 7995716742</button>
  
        </div>
        
        
    </div>
    <div className='row topsec2' >
        <div className='col-12 col-md-4' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} src="https://static.thenounproject.com/png/1877613-200.png"/>
        <h3>Doorstep Service</h3>
        <p>Bringing expertise to your doorstep for a hassle-free experience, making life easier.</p>
        
        </div> 
        <div className='col-12 col-md-4' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} src="https://www.pngkey.com/png/full/188-1888297_certificate-comments-certificate-icon-png.png"/>
        <h3>Certified Service Provider</h3>
        <p>Our experts are certified professionals with the knowledge to fix it right.</p>
        
        </div> 
        <div className='col-12 col-md-4' style={{textAlign:"center",padding:"15px"}}> 
        <img style={{width:"80px",height:"80px"}} src="https://icon-library.com/images/branding_brand_trust_trusted-512.png"/>
        <h3>All Brand Service</h3>
        <p>We cover all brands, ensuring your devices are in good hands, no matter the make.</p>
        
        </div> 

    </div>
    </div>
  );
};

export default Topse;
