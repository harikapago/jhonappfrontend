import React from 'react';
import "./styles/brands.css";
import img1 from "../assets/brands.jpeg";

const Brands = () => {
  const brandImages = [
    'brand1.jpg',
    'brand2.jpg',
    'brand3.jpg',
    'brand4.jpg',
    // Add more brand image file names as needed
  ];

  return (
    <div id="brands" style={{padding:"15px",marginTop:"4rem",width:"100%",textAlign:"center"}}>
        <h2 style={{fontWeight:"bold"}}>Our Brands</h2>
        <div className='row' style={{justifyContent:"center",alignItems:"center",}}>
   <div className='col-12 col-md-6 '>
    <p> we stand as your trusted destination for TV repair services, where quality is paramount.
         Our commitment to excellence extends to the selection of premium components from industry-leading
          brands like Sony, Panasonic, Samsung, and more. We understand the significance of using the very 
          best in the industry to restore your television to its prime performance. By exclusively employing 
          genuine parts from these renowned manufacturers, we assure you that your TV will not only 
          be repaired but enhanced to offer a viewing experience like no other. Rest assured that your
           valued entertainment appliance is in expert hands when you choose us for repairs. We take pride 
           in delivering exceptional quality, ensuring that your TV functions as flawlessly as the day 
        you brought it home.</p>
   </div>
    <div className='col-12 col-md-6' style={{maxHeight:"18rem",overflow:"auto"}}>
        <img src={img1} style={{width:"80%",height:"100%"}} />
    </div>
    </div>
    </div>
  );
};

export default Brands;
