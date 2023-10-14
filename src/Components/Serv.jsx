// src/App.js
import React from 'react';
import './styles/serv.css';

import image1 from '../assets/solutions/bg2.jpg';
import image2 from '../assets/solutions/bg3.jpg';
import image3 from '../assets/solutions/bg4.jpg';
import image4 from '../assets/solutions/Bigdata.avif';
import image5 from '../assets/solutions/bg6.jpg';
import image6 from "../assets/solutions/bi.jpg";
import image9 from "../assets/solutions/bg1.jpeg";
import image8 from "../assets/solutions/ui.webp";

const data = [
  {
    id: 1,
    image: image1,
    title: 'Title 1',
    description: 'With a team of skilled technicians and a commitment to excellence, we have been providing top-notch TV repair solutions for Rajahmundry and the surrounding areas.',
  },
  {
    id: 2,
    image: image2,
    title: 'Title 2',
    description: 'Description for Item 2',
  },
  {
    id: 3,
    image: image3,
    title: 'Title 3',
    description: 'Description for Item 3',
  },
  {
    id: 4,
    image: image4,
    title: 'Title 1',
    description: 'Description for Item 1',
  },
  
];

function GridItem({ image, title, description }) {
  return (
    <div className="grid-item">
      <img src={image} alt={title}  style={{height:"12rem",width:"100%"}}/>
      <h2>{title}</h2>
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
