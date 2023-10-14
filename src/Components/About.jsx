import React,{useState,useEffect} from 'react';
import image1 from '../assets/team.png';
import image2 from '../assets/hand.png'; 
import image3 from '../assets/ex.png'; 
import video1 from "../assets/tv4.jpg";
import img2 from "../assets/tv1.jpg";
import img3 from "../assets/tv11.jpg";
import img4 from "../assets/tv3.jpg";

// Import your image

import "./styles/about.css";

const About = () => {

  const images = [video1,img4, img2, img3]; // Replace video1, video2, video3 with your image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const interval = 2000; // 2 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index of the next image, looping back to the first if necessary
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, interval);

    return () => {
      // Cleanup the timer when the component unmounts
      clearInterval(timer);
    };
  }, [currentImageIndex, images]);

  return (
    <div  id="AboutUs" style={{padding:"15px",marginTop:"4rem",width:"100%"}}>
      <h2 style={{textAlign:"center"}}>About Us</h2>
        <h4 style={{textAlign:"center"}}>Best TV Repair Strore In Rajahmundry</h4>
    <div className='row' style={{padding:"1rem"}} >
    
      <div className='col-12 col-md-7' style={{padding:"0rem"}}>
       
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
      <div className='col-12 col-md-5' >
      <img src={images[currentImageIndex]} alt="Image" className="imgabout" />
       
      </div>
      
    </div>
    <h4 className='aboutdiv1' style={{textAlign:"center"}}>Why choose us?</h4>
    <div className='aboutdiv1 ' style={{}} >
        
        <div className=' aboutsec2' style={{textAlign:"center"}}> 
        <img style={{width:"80px",height:"80px"}} src={image3}/>
        <h3>Experience</h3>
        <p>With 10+ years of experience, we're not just fixing screens; we're mending experiences.</p>
        
        </div> 
        <div className=' aboutsec2' style={{textAlign:"center"}}> 
        <img style={{width:"80px",height:"80px"}} src={image1} />
        <h3>Team</h3>
        <p> We have a dedicated team, working tirelessly to bring the joy back into your living room.</p>
        
        </div> 
        <div className='aboutsec2' style={{textAlign:"center"}}> 
        <img style={{width:"80px",height:"80px"}} src={image2}/>
        <h3>Safe Delivery</h3>
        <p>We don't just repair TVs; we restore your peace of mind with safe and secure delivery.</p>
        
        </div> 

    </div>
    </div>
  );
}

export default About;
