import React from 'react';
import image1 from '../assets/team.png';
import image2 from '../assets/hand.png'; 
import image3 from '../assets/ex.png'; 
import video1 from "../assets/tv4.jpg";
// Import your image

import "./styles/about.css";

const About = () => {
  return (
    <div  id="AboutUs" >
    <div className='aboutdiv' style={{padding:"15px",marginTop:"4rem",width:"100%"}}>
      <div  style={{padding:"1rem"}}>
        <h5>About Us</h5>
        <h3>Best TV Repair Strore In Rajahmundry</h3>
        <p>At Multitech Electronics, we are your trusted destination for TV repair services. 
            With a team of skilled technicians and a commitment to excellence, we have been providing 
            top-notch TV repair solutions for <span style={{color:"blue",fontWeight:"bold"}}>Rajahmundry</span> and the surrounding areas. 
            Our mission is to bring your entertainment back to life. 
            We understand the frustration of a malfunctioning TV, and that's why we're dedicated to being
             your one-stop solution for all your TV repair needs. With years of experience and a passion 
             for what we do, we take pride in our ability to quickly diagnose and fix a wide range of TV
              issues. Customer satisfaction is at the heart of our business,
               and we strive to provide efficient, cost-effective, and reliable TV repair services.
                When you choose <span style={{color:"blue",fontWeight:"bold"}}>MultiTech Electronics</span>, you're choosing a team that cares 
                about the quality of your viewing experience. Let us help you get back to enjoying your 
                favorite shows and movies, one repair at a time.</p>
             </div>
      <div >
        <img src={video1} alt="Image" className="imgabout" />
       
      </div>
      
    </div>
    <h3 style={{textAlign:"center"}}>Why choose us?</h3>
    <div className='aboutdiv1 ' style={{}} >
        
        <div className=' aboutsec2' style={{textAlign:"center"}}> 
        <img style={{width:"80px",height:"80px"}} src={image3}/>
        <h3>Experience</h3>
        <p>We Specialize in providing Water Proof Packaging of Goods</p>
        
        </div> 
        <div className=' aboutsec2' style={{textAlign:"center"}}> 
        <img style={{width:"80px",height:"80px"}} src={image1} />
        <h3>Team</h3>
        <p>Our Professionals will take care of Hassle-Free Loading & Unloading of Goods.</p>
        
        </div> 
        <div className='aboutsec2' style={{textAlign:"center"}}> 
        <img style={{width:"80px",height:"80px"}} src={image2}/>
        <h3>Safe Delivery</h3>
        <p>We Specialize in providing Water Proof Packaging of Goods</p>
        
        </div> 

    </div>
    </div>
  );
}

export default About;
