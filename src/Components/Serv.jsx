// src/App.js
import React from 'react';
import './styles/serv.css';
import { Helmet } from 'react-helmet';

import l1 from "../assets/l1.png";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";

const data = [
  {
    id: 1,
    image: l1,
    title: ' LCD/LED TV Servicing',
    description: 'We provide expert service and repairs for a wide range of TVs, including Plasma, LCD, QLED, OLED, and 4K models, ensuring your television operates at its best.',
  },
  {
    id: 2,
    image: l2,
    title: 'Screen Replacement',
    description: 'Flickering or flashing on the screen can be distracting and annoying. We offer expert screen replacement services for your TV, restoring crystal-clear visuals and enhancing your viewing experience.',
  },
  {
    id: 3,
    image: l3,
    title: 'MotherBoard Repairs',
    description: 'Frequent problem for motherboards is power surges. Our experienced technicians are dedicated to diagnosing and fixing motherboard issues, delivering top-quality results.',
  },
  {
    id: 4,
    image: l4,
    title: 'Finding issues',
    description: 'Typically we revolve any type of issues with picture quality, Audio Sync Issues, Remote Control Problems, Power and Startup Issues, functionality etc.We offer comprehensive maintenance and troubleshooting solutions.',
  },
  
];


// We offer comprehensive maintenance and troubleshooting solutions to keep your high-quality display technology in optimal condition.
function GridItem({ image, title, description }) {
  return (
    <div className="grid-item">
      <Helmet>
        <title>TV Repair Rajahmundry</title>
        <meta name="description" content="Find the best TV repair shops in Rajahmundry for all your TV repair needs." />
        <meta name="keywords" content="TV repair, Rajahmundry, LED TV repair, LCD TV repair, TV repair shops, rjy" />
      </Helmet>
      <img src={image} alt={title}  style={{height:"14rem",width:"100%"}}/>
      <h5 style={{width:"100%",marginTop:"10px"}}>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

function Serv() {
  return (
    <div id="our-services" style={{padding:"15px",marginTop:"4rem",width:"100%",textAlign:"center"}}>
        <h2 style={{fontWeight:"bold"}}>Our Services</h2>
    <div className="grid-container">
      {data.map((item) => (
        <GridItem
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
    </div>
  );
}

export default Serv;
